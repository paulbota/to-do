import { Component, OnInit } from '@angular/core';

class Item {
  text: string;
  selected: boolean;

  constructor(text: string, selected: boolean) {
    this.text = text;
    this.selected = selected;
  }
}

@Component({
  selector: 'td-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  items: Item[] = [];
  selectedText = '';

  constructor() {
  }

  ngOnInit() {
  }

  addItem() {
    this.items.push({
      text: this.selectedText,
      selected: false
    });
    this.selectedText = '';
  }

  selectAll() {
    this.items.forEach((item: Item) => {
      item.selected = true;
    });
  }

  deleteAllSelected() {
    this.items = this.items.filter((item: Item) => {
      return !item.selected;
    });
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }
}
