import { Component } from '@angular/core';
import { HlmFieldImports } from '@spartan-ng/helm/field';
import { HlmInputImports } from '@spartan-ng/helm/input';

@Component({
  selector: 'app-signin',
  imports: [HlmFieldImports, HlmInputImports],
  host: { class: 'w-full max-w-md' },
  templateUrl: './signin.page.html',
})
export class SigninPage {}