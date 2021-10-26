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

    _this.spinner.show();

    //  Consultar información

    let apiAboglineCalendarGetInfo = new FormData();

    apiAboglineCalendarGetInfo.append("usuario",sessionStorage.getItem("usuario"));

    _this.postModel("apiAboglineCalendarGetInfo",apiAboglineCalendarGetInfo).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      _this.spinner.hide();

      if(result[0].agenda.length > 0){

        var fechaEvento = "";

        for(var i = 0; i < result[0].agenda.length; i++){

          fechaEvento = result[0].agenda[i].fecha;
          fechaEvento = fechaEvento.replace("T"," ");

          //  Definir título de la reunión

          if(sessionStorage.getItem("perfil") == "cliente")
            reunion = "Reunión con el abogado " + fechaEvento + ", link: <a target='_blank' href='" + result[0].agenda[i].link + "'>" + result[0].agenda[i].link + "</a>";
          else
            reunion = "Reunión con el cliente " + fechaEvento + ", link: <a target='_blank' href='" + result[0].agenda[i].link + "'>" + result[0].agenda[i].link + "</a>";


          _this.events.push(
            {
              start: new Date(fechaEvento),
              end: new Date(fechaEvento),
              title: reunion,
              color: colors.blue,
              allDay: false,
            }
          );

        }

        $(".anterior").click();
        $(".mesActual").hide();

        setTimeout(() => {
          $(".hoy").click();
          $(".mesActual").show();
        },1000)

      }

    });

  }

}
