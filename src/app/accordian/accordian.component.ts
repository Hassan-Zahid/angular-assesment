import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { NgbAccordion } from "@ng-bootstrap/ng-bootstrap";
import { Accordian, Plugins } from "../shared/accordian-data.model";

@Component({
  selector: "app-accordian",
  templateUrl: "./accordian.component.html",
})
export class AccordianComponent implements OnInit {
  @ViewChild("accordian") accordionComponent: NgbAccordion;
  @ViewChild("headerSwitch") headerSwitch: any;
  @ViewChild("childPlugin") childPlugin: any;
  @Input() accordianData: Accordian[];
  isSelected: boolean;
  constructor() { }

  ngOnInit() { }

  // Accordion toggle
  toggle(id: string): void {
    this.accordionComponent.toggle(id);
  }

  toggleAllChildren(event: Event, data: Accordian, childData: Plugins) {
    if (this.uncheckHeaderBox(childData) === false) {
      return data.isEnabled = false;
    }
    data.isEnabled = childData.map((childItem: any) => {
      return childItem.isEnabled;
    });
  }

  uncheckHeaderBox(childData: Plugins) {
    for (let i = 0; i < childData.length; i++) {
      const pluginChecked: boolean = childData[i].isEnabled;
      if (!pluginChecked) return false;
    }
    
    return true;
  }

  toggleSingleChild(data: Accordian) {
    for (let i = 0; i < data.PluginList.length; i++) {
      data.PluginList[i].isEnabled = data.isEnabled;
    }
  }
}

