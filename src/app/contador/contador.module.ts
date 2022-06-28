import { NgModule } from "@angular/core";
import { ContadorComponents } from './contador/contador-component';


@NgModule({
    declarations: [
        ContadorComponents,
    ],
    exports:[
        ContadorComponents,
    ],
        
})

export class ContadorModule {

}
