import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'roundNumber'})
export class RoundNumberPipe implements PipeTransform {
    transform(n: number | undefined) {
        return n ? Math.round(n) : n
    }
}