import { Component } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
//import am4geodata_worldLow from "@amcharts/amcharts4-geodata/india2020Low";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private chart:am4maps.MapChart | undefined;
  
  ngAfterViewInit(){
    this.chart = am4core.create("chartdiv",am4maps.MapChart);
    this.chart.geodata = this.chart.geodataSource.url = "https://run.mocky.io/v3/31209569-c42e-4b30-8a9d-78389a234b43";
    this.chart.projection= new am4maps.projections.Miller;


    let polygonSeries = this.chart.series.push(new am4maps.MapPolygonSeries());
    
    polygonSeries.useGeodata= true;

    let polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}";
    polygonTemplate.polygon.fillOpacity =0.6;
    polygonTemplate.fill = am4core.color("#74B267");
    let hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("#74X999");

  }
  ngOnDestroy(){
    if(this.chart){
      this.chart.dispose();
    }
  }
}
