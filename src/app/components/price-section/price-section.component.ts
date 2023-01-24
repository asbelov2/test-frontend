import { Component } from '@angular/core';

@Component({
  selector: 'app-price-section',
  templateUrl: './price-section.component.html',
  styleUrls: ['./price-section.component.scss']
})
export class PriceSectionComponent {
  rates = [
    {
      name: 'Базовый тариф',
      badge: 'Бестселлер',
      price: 1100,
      period: 1,
      description: 'Программа с ТСН МГЭ на 1 день',
      possibilities: [
        {main: 'База ТСН МГЭ', secondary:'(56 дополнение)'},
        {main: 'Индексы ТСН МГЭ', secondary:'(2019 год)'},
        {main: 'Индексы  ТСН МГЭ Глава 13', secondary:'(2017 год)'}
      ]
    },
    {
      name: 'Базовый тариф',
      price: 3300,
      period: 30,
      description: 'Программа с ТСН МГЭ на 30 дней',
      possibilities: [
        {main: 'База ТСН МГЭ', secondary:'(56 дополнение)'},
        {main: 'Индексы ТСН МГЭ', secondary:'(2019 год)'},
        {main: 'Индексы  ТСН МГЭ Глава 13', secondary:'(2017 год)'}
      ]
    },
    {
      name: 'Энтерпрайз тариф',
      price: 9900,
      period: 90,
      description: 'Программа с ТСН МГЭ на 90 день',
      possibilities: [
        {main: 'База ТСН МГЭ', secondary:'(56 дополнение)'},
        {main: 'Индексы ТСН МГЭ', secondary:'(2019 год)'},
        {main: 'Индексы  ТСН МГЭ, Глава 13', secondary:'(2017 год)'}
      ]
    }
  ]
  getPeriodText(period:number) {
    if (period%10 === 1) 
      return period + ' день'
    else if ((period % 10 > 1) && (period % 10 < 5))
      return period + ' дня'
    else 
      return period + ' дней'
  }
}
