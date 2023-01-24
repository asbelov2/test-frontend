import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  footerColumns = [
    {header:'Возможности', links:[{text:'Обзор продукта'}, {text:'Возможности'}, {text:'Отличия от программ', badge:'New'}, {text:'Параметры'}, {text:'Информация об обновлениях'}]},
    {header:'Помощь', links:[{text:'Быстрый старт'}, {text:'Справка'}, {text:'Обучающие материалы'}, {text:'Платные курсы'}]},
    {header:'Тарифы', links:[{text:'Тарифы'}, {text:'Описания'}]},
    {header:'Правовая информация', links:[{text:'Условия работы'}, {text:'Приватность'}, {text:'Cookies'}, {text:'Лицензирование'}, {text:'Обратная связь'}]}
  ]
}
