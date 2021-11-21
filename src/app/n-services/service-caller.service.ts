//append_imports_start

import * as sd_d28Uf7mpcLHBTedE from 'src/app/sd-services/question-explorer.service'; //_splitter_
import { Injectable } from '@angular/core'; //_splitter_
//append_imports_end
@Injectable({ providedIn: 'root' })
export class __NEU_ServiceInvokerService__ {
  constructor(
    private sd_d28Uf7mpcLHBTedE: sd_d28Uf7mpcLHBTedE.QuestionExplorerService
  ) {}
  invoke(
    injectedServiceId: string,
    methodName: string,
    ...methodArguments: any[]
  ) {
    return this[injectedServiceId][methodName](...methodArguments);
  }
}
