import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'roundNumber'})
export class RoundNumberPipe implements PipeTransform {
    transform(n: number) {
        return Math.round(n)
    }
}