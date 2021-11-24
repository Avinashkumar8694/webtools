import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'; //_splitter_
import { QuestionExplorerService } from 'src/app/sd-services/question-explorer.service';
import { __NEU_ServiceInvokerService__ } from 'src/app/n-services/service-caller.service'; //_splitter_
import { SDBaseService } from 'src/app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'src/app/n-services/sd-page-common.service'; //_splitter_
import { CommonService } from 'src/app/sd-services/common.service';
@Component({
  selector: 'app-questionexplorer',
  templateUrl: './questionexplorer.component.html',
  styleUrls: ['./questionexplorer.component.css']
})
export class QuestionexplorerComponent{

  selectedOption='in';
  searchKeyword;
  page = {deps:{},params: {
    country:'in',
    searchKeyword: 'Streaming Device',
    language:'en'
  },
  questions:[]
};
  constructor(private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__, 
    public commonService: CommonService) { }

  ngOnInit(): void {
    this.commonService.setPageTitle('Question Explorer');
    this.getFaq();
  }


  getFaq() {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.getFaqCallService(bh);
      //appendnew_next_getFaq
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0WzsHcuVFammaAEa');
    }
  }

  async getFaqCallService(bh) {
    try {
      const questionExplorerInstance: QuestionExplorerService =
        this.__page_injector__.get(QuestionExplorerService);

      let outputVariables = await questionExplorerInstance.getFaq(
        this.page.params.searchKeyword,
        this.page.params.language,
        this.page.params.country
      );
      bh.local.response = outputVariables.local.response;
      this.page.questions = bh.local.response.filter(obj => obj.questions.length);
      //appendnew_next_sd_oYE62jfplqxeZVax
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_oYE62jfplqxeZVax');
    }
  }

  errorHandler(bh, e, src) {
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
