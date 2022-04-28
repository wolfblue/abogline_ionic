import {
  OnInit,
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
} from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';

import { NgxSpinnerService  } from "ngx-spinner";
import { environment } from '../../environments/environment';
import {HttpClient} from "@angular/common/http";
import { takeUntil } from 'rxjs/operators';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};

declare var $;

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  private unsubscribe$ = new Subject<void>();

  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fas fa-fw fa-pencil-alt"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      },
    },
    {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter((iEvent) => iEvent !== event);
        this.handleEvent('Deleted', event);
      },
    },
  ];

  refresh: Subject<any> = new Subject(); 
  events: CalendarEvent[] = [];
  activeDayIsOpen: boolean = false;

  renderCalendar: any;

  constructor(

    private modal: NgbModal,
    private spinner: NgxSpinnerService,
    private http:HttpClient

  ) {

    //  Consultar información de la página
    this.getInfoPage();

  }

  postModel(Metodo: string, data: FormData) {
    let url = `${environment.apiUrl}` + Metodo;
    return this.http.post(url, data);
  }

  ngOnInit() {

    //  Traducir
    this.traducir();

    setTimeout(function(){

      const date = new Date();

      const renderCalendar = () => {
        date.setDate(1);

        const monthDays = document.querySelector(".days");

        const lastDay = new Date(
          date.getFullYear(),
          date.getMonth() + 1,
          0
        ).getDate();

        const prevLastDay = new Date(
          date.getFullYear(),
          date.getMonth(),
          0
        ).getDate();

        const firstDayIndex = date.getDay();

        const lastDayIndex = new Date(
          date.getFullYear(),
          date.getMonth() + 1,
          0
        ).getDay();

        const nextDays = 7 - lastDayIndex - 1;

        const months = [
          "Enero",
          "Febrero",
          "Marzo",
          "Abril",
          "Mayo",
          "Junio",
          "Julio",
          "Agosto",
          "Septiembre",
          "Octubre",
          "Noviembre",
          "Diciembre",
        ];

        document.querySelector(".date h1").innerHTML = months[date.getMonth()];

        //document.querySelector(".date p").innerHTML = new Date().toDateString();

        let days = "";

        for (let x = firstDayIndex; x > 0; x--) {
          days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
        }

        for (let i = 1; i <= lastDay; i++) {
          if (
            i === new Date().getDate() &&
            date.getMonth() === new Date().getMonth()
          ) {
            days += `<div class="today">${i}</div>`;
          } else {
            days += `<div>${i}</div>`;
          }
        }

        

        for (let j = 1; j <= nextDays; j++) {
          days += `<div class="next-date">${j}</div>`;
          monthDays.innerHTML = days;
        }
        
        $(".days").html(days);

      };

      /*document.querySelector(".prev").addEventListener("click", () => {
        date.setMonth(date.getMonth() - 1);
        renderCalendar();
      });

      document.querySelector(".next").addEventListener("click", () => {
        date.setMonth(date.getMonth() + 1);
        renderCalendar();
      });*/

      renderCalendar();

      $(".days div").css("font-size","22px");
      $(".days div").css("margin-top","1%");
      $(".days div").css("width","13.7%");
      $(".days div").css("display","flex");
      $(".days div").css("justify-content","center");
      $(".days div").css("align-items","center");
      $(".days div").css("text-shadow","0 0.3rem 0.5rem rgba(0, 0, 0, 0.5)");
      $(".days div").css("transition","background-color 0.2s");
      $(".date").css("margin","auto");
      $(".calendarioMini").show();

    },2000);

  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    //this.modalData = { event, action };
    //this.modal.open(this.modalContent, { size: 'lg' });
  }

  addEvent(): void {
    this.events = [
      ...this.events,
      {
        title: 'New event',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: colors.red,
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true,
        },
      },
    ];
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter((event) => event !== eventToDelete);
  }

  setView(view: CalendarView) {

    this.traducir();
    this.view = view;

  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  traducir(){

    //  Variables iniciales
    var html = "";

    setTimeout(function(){

      $(".cal-cell,.cal-header").each(function(){

        html = $(this).html();
  
        html = html.replace("Sunday","Domingo");
        html = html.replace("Monday","Lunes");
        html = html.replace("Tuesday","Martes");
        html = html.replace("Wednesday","Miercoles");
        html = html.replace("Thursday","Jueves");
        html = html.replace("Friday","Viernes");
        html = html.replace("Saturday","Sabado");

        $(this).html(html);
  
      });

    },200);

  }

  /**************************************************************************** */
  //  CONSULTAR INFORMACIÓN DE LA PÁGINA
  /**************************************************************************** */

  getInfoPage(){

    //  Variables iniciales

    var _this = this;
    var reunion = "";

    //  Consultar calendario

    let apiConsultarCalendario = new FormData();

    apiConsultarCalendario.append("usuario",sessionStorage.getItem('usuario'));

    _this.postModel("apiConsultarCalendario",apiConsultarCalendario).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      if(result.length > 0){

        for(var i = 0; i < result.length; i++){

          var reunion = result[i].descripcion;

          if(result[i].link)
            reunion = reunion + ": " + "<a href='"+result[i].link+"' target='_blank'>" + result[i].link + "</a>";
          else
          reunion = reunion + ": (Pronto se asignará link de la reunión)";

          _this.events.push(
            {
              start: new Date(result[i].fechaDesde),
              end: new Date(result[i].fechaHasta),
              title: reunion,
              color: colors.blue,
              allDay: false,
            }
          );

        }

      }

      $(".anterior").click();
      $(".mesActual").hide();

      setTimeout(() => {
        $(".hoy").click();
        $(".mesActual").show();
        $(".siguiente").click();

        $(".cal-month-view .cal-header .cal-cell").css("background","#445F73");
        $(".cal-month-view .cal-header .cal-cell").css("color","#ffffff");
        $(".cal-month-view .cal-header .cal-cell").css("font-size","12px");
        $(".cal-month-view .cal-header .cal-cell").css("text-transform","uppercase");
        $(".cal-month-view .cal-day-cell.cal-today").css("background","#ffffff");
        $(".anterior").css("background","#445F73");
        $(".siguiente").css("background","#445F73");
        $(".siguiente").css("float","right");

        $(".calendarioGrande").show();

      },1000);

    });

  }

}
