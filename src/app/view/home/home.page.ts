import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public first_value! : number;
  public second_value! : number;
  public operation! : number;
  public result! : number;

  constructor(private alertController: AlertController) {}

  calculate(){
    if(this.operation == 3 && this.first_value == 0 || this.second_value == 0){
      this.presentAlert('Erro ao calcular!', 'Impossível dividir por zero!')
    }else{
      if(this.first_value && this.second_value && this.operation){
        if(this.operation == 0){
          this.result = this.first_value + this.second_value;
        }else if(this.operation == 1){
          this.result = this.first_value - this.second_value;
        }else if(this.operation == 2){
          this.result = this.first_value * this.second_value;
        }else if(this.operation == 3){
          this.result = this.first_value / this.second_value;
        }
        this.presentAlert('O resultado é:', this.result.toString())
      }else{
        this.presentAlert('Erro ao calcular!', 'Todos os campos são obrigatórios!')
      }
    }
    this.first_value = NaN;
    this.second_value = NaN;
    this.operation = NaN;
  }

  async presentAlert(subHeader : string, message : string) {
    const alert = await this.alertController.create({
      header: 'Calculadora',
      subHeader: subHeader,
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  performOperation() {
    switch (this.operation) {
      case 0:
        this.result = this.first_value + this.second_value;
        break;
      case 1:
        this.result = this.first_value - this.second_value;
        break;
      case 2:
        this.result = this.first_value * this.second_value;
        break;
      case 3:
        this.result = this.first_value / this.second_value;
        break;
      default:
        break;
    }
  }

}
