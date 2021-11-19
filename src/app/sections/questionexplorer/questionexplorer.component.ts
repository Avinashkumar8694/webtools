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
    searchKeyword: '',
    language:'en'
  }};
  constructor(private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__) { }

  ngOnInit(): void {
  }

  setval(event){
    console.log("assasasasas")
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
        this.page.params
      );
      bh.local.response = outputVariables.local.response;

      bh = this.getFaqScript(bh);
      //appendnew_next_sd_oYE62jfplqxeZVax
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_oYE62jfplqxeZVax');
    }
  }

  getFaqScript(bh) {
    try {
      const page = this.page;
      console.log(bh);
      //appendnew_next_sd_jA2g8JRoYol3FJXw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jA2g8JRoYol3FJXw');
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
