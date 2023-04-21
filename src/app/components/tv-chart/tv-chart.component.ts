import {Component, OnInit} from '@angular/core';
import {EntityInfo, ILineDataSourceApi} from "./charting_library.standalone";

@Component({
  selector: 'app-tv-chart',
  templateUrl: './tv-chart.component.html',
  styleUrls: ['./tv-chart.component.css']
})
export class TvChartComponent implements OnInit {

  private _tvWidget: TradingView.IChartingLibraryWidget | null = null;

  ngOnInit() {
    function getParameterByName(name: string) {
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
      return results === null
        ? ""
        : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    const initOnReady = (test: EventListenerOrEventListenerObject) => {
      console.log("Test" + typeof test);
      var datafeedUrl = "https://demo-feed-data.tradingview.com";
      var customDataUrl = getParameterByName("dataUrl");
      if (customDataUrl !== "") {
        datafeedUrl = customDataUrl.startsWith("https://")
          ? customDataUrl
          : `https://${customDataUrl}`;
      }

      // @ts-ignore
      this._tvWidget = new TradingView.widget({
        // debug: true, // uncomment this line to see Library errors and warnings in the console
        fullscreen: false,
        symbol: "AAPL",
        interval: "1D",
        container_id: "tv_chart_container",
        width: 1500,
        height: 1000,

        //	BEWARE: no trailing slash is expected in feed URL
        // @ts-ignore
        datafeed: new Datafeeds.UDFCompatibleDatafeed(
          datafeedUrl,
          undefined,
          {
            maxResponseLength: 1000,
            expectedOrder: "latestFirst",
          }
        ),
        // @ts-ignore
        style: "1",
        toolbar_bg: "transparent",
        library_path: "charting_library/",
        locale: "en",
        // charts_storage_url: "https://saveload.com",
        charts_storage_api_version: "1.1",
        client_id: "com",
        user_id: "public_user_id",
        theme: "Dark",
        debug: false,
        loading_screen: {
          backgroundColor: "transparent",
        },

        enabled_features: ["right_bar_stays_on_scroll"
          , "minimalistic_logo"
          , "narrow_chart_enabled"
          , "header_saveload"
          , "header_widget_dom_node"
          , "header_screenshot"
          , "show_logo_on_all_charts"
          , "study_templates"],
      });


      // @ts-ignore
      window.tvWidget = this._tvWidget;
    }

    // @ts-ignore
    // const tvWidget: IChartingLibraryWidget = this._tvWidget;
    // @ts-ignore
    window.addEventListener("DOMContentLoaded", initOnReady, false);
    // @ts-ignore
  }

  onTest2(): void {
    console.log(this._tvWidget);
    const shapes: EntityInfo[] | undefined = this._tvWidget?.chart().getAllShapes();
    console.log(shapes);

    if (!!shapes && shapes.length > 0) {
      const shape: ILineDataSourceApi | undefined = this._tvWidget?.activeChart().getShapeById(shapes[0].id);
      console.log(shape);
      console.log(shape?.getProperties());
      const test: string = JSON.stringify(shape?.getPoints());
      console.log(test);
      shape?.setProperties(JSON.parse(test));
    }
  }

}
