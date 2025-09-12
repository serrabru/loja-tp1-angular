import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'truncar'
})

export class TruncarPipe implements PipeTransform {
    transform(value: string, limite: number = 20, trail: string = '...'): string {
        if (!value) return '';
        if (value.length <= limite) return value;
        return value.substring(0, limite) + trail;
    }
}