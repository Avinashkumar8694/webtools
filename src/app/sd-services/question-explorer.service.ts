import { Injectable } from '@angular/core'; //_splitter_
import {
  Router,
} from '@angular/router'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { SDBaseService } from '../../app/n-services/SDBaseService'; //_splitter_

@Injectable({
  providedIn: 'root'
})
export class QuestionExplorerService {

  constructor(
    private sdService: SDBaseService,
    private router: Router,
    private matSnackBar: MatSnackBar
  ) {
    this.registerListeners();
  }
  registerListeners() {
    let bh = this.sdService.__constructDefault({});

    //append_listeners
  }

  async getFaq(params: any = undefined, language: any = undefined, country: any=undefined, ...others) {
    try {
      var bh: any = {
        input: {
          params: params,
          language: language,
          country: country
        },
        local: {
          response: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh.faqUrl = bh.system.environment.api_base_url + 'seoQuestionSuggestion';
      bh = await this.getFaqHttp(bh);
      //appendnew_next_getFaq
      return (
        // formatting output variables
        {
          input: {},
          local: {
            response: bh.local.response,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_jU13AQUuOgHD3PgU');
    }
  }

  //appendnew_flow_questionExplorer_start

  async getFaqHttp(bh) {
    try {
      let requestOptions = {
        url: bh.faqUrl,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: {keyword: bh.input.params, language: bh.input.language, country: bh.input.country},
      };
      bh.local.response = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_getFaqHttp
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_g4ZvRRxXKAIZRv9Y');
    }
  }

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
}
