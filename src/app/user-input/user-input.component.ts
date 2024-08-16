import { Component } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent {


  public enteredIntialInvestment = '0'
  public enteredAnnualInvestment = '0'
  public enteredExpectedReturn = '15'
  public enteredDuration = '10'

  constructor(private investmentService: InvestmentService){

  }

  onSumbit() {
    this.investmentService.calculateInvestmentResults({
        initialInvestment: +this.enteredIntialInvestment,
        duration: +this.enteredDuration,
        expectedReturn: +this.enteredExpectedReturn,
        annualInvestment: +this.enteredAnnualInvestment
    })

  }

}
