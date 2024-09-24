import { AfterViewInit, Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { HeaderComponent } from "../header/header.component";
import { Router } from "@angular/router";
import { ClientService } from "../../services/client.service";
import { Client } from "../../model/Client";
import { ToastrService } from "ngx-toastr";
import { DateComponent } from "../date/date.component";


@Component({
  selector: 'app-add-client',
  standalone: true,
  imports: [HeaderComponent, CommonModule, FormsModule, DateComponent, ReactiveFormsModule],
  templateUrl: './add-client.component.html',
  styleUrl: './add-client.component.scss'
})
export class AddClientComponent implements OnInit{

  form!: FormGroup;

  constructor(
    private router : Router, 
    private clientService : ClientService,
    private toastr: ToastrService,
    private fb: FormBuilder ) {

      this.form = this.fb.group({
        name: ['', [Validators.required, Validators.minLength(3)]],
        telefone: ['', [Validators.required, Validators.minLength(11)]],
        carro: ['', [Validators.required, Validators.minLength(3)]],
        placa: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(7)]]
      });
    }

  ngOnInit(): void {
  }

//JSON de clientes
clients : Client[] = [];

//Novo objeto
client = new Client();

createClient(): void {
  if (this.form.valid) { // Verifique se o formulário é válido
    // Extraindo os valores do formulário
    this.client.nome = this.form.value.name;
    this.client.telefone = this.form.value.telefone;
    this.client.carro = this.form.value.carro;
    this.client.placa = this.form.value.placa;

    this.clientService.createClient(this.client).subscribe(data => {
      this.clients.push(data);

      this.toastr.success('Cliente Cadastrado Com Sucesso!', 'Parabéns!');

      this.router.navigate(['clients']);
    }, error => {
      // Handle error case
      this.toastr.error('Erro ao cadastrar cliente!', 'Erro');
      console.error('Error:', error);
    });
  } else {
    // Mostrar erro se o formulário não é válido
    this.toastr.error('Por favor, preencha todos os campos corretamente!', 'Erro');
  }
}

//Formatar telefone
formatPhone(event: any): void {
  const input = event.target.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
  const key = event.inputType; // Verifica o tipo de ação de entrada (backspace ou inserção)

  // Impedir a formatação ao apagar com backspace, mantendo apenas a exclusão normal
  if (key === 'deleteContentBackward') {
    return; // Não aplicar formatação ao apagar
  }

  if (input.length === 0) {
    event.target.value = ''; // Limpar o campo completamente
    return;
  }

  if (input.length > 10) {
    event.target.value = input.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
  } else if (input.length > 6) {
    event.target.value = input.replace(/^(\d{2})(\d{5})(\d{0,4}).*/, '($1) $2-$3');
  } else if (input.length > 2) {
    event.target.value = input.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
  } else {
    event.target.value = input.replace(/^(\d*)/, '($1');
  }
}

  // Rotas
  goToHome() {

    this.router.navigate([''])

  }

  goToClient() {

    this.router.navigate(['clients'])

  }

}
