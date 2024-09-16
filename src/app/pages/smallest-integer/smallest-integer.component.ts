import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-smallest-integer',
  standalone: true,
  imports: [],
  templateUrl: './smallest-integer.component.html',
  styleUrl: './smallest-integer.component.scss'
})
export class SmallestIntegerComponent implements OnInit {

    /**
     * Add whatever tests you want to here
     */
    ngOnInit(): void {
        this.test([1, 6, 3, 4, 2, 1], 5); // should log 5
        this.test([1, 2, 3, 4, 5], 6); // should log 6
        this.test([-1, -6, 4], 1); // should log 1
        
    }

    /**
     * Write your code inside this function
     */
    smallestMissingInt(A: number[]): number {
    
            const positives = new Set(A.filter(x => x > 0));
            let smallestMissing = 1;
            while (positives.has(smallestMissing)) {
                smallestMissing++;
            }
            return smallestMissing;
    }

    /**
     * Do not edit this function
     */
    private test(arr: number[], expected: number): void {
        const result = this.smallestMissingInt(arr);

        if (result === expected) {
            console.log(`Success: ${result} is the correct answer`);
        } else {
            console.error(`ERROR: ${result} !== ${expected}`);
        }
    }

}
