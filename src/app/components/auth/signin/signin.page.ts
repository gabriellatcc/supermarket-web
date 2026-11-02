import { Component } from '@angular/core';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { HlmFieldImports } from '@spartan-ng/helm/field';
import { HlmInputImports } from '@spartan-ng/helm/input';

@Component({
  selector: 'app-signin',
  imports: [HlmFieldImports, HlmInputImports, HlmButtonImports, HlmCardImports],
  host: { class: 'w-full max-w-md' },
  templateUrl: './signin.page.html',
})
export class SigninPage {}