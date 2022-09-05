"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Borad_1 = require("./Borad");
const StoneStats_1 = require("./model/StoneStats");
describe('Board.ts', () => {
    /**
         *  | | | | | | |
         *  | | | | | | |
         *  | | | | | | |
         *  | | |W|B| | |
         *  | | |B|W| | |
         *  | | | | | | |
         *  | | | | | | |
         *  | | | | | | |
         */
    const board = new Borad_1.Board();
    test.each([
        [
            `
            | | | | | | | 
            | | | | | | | 
            | | | |W| | | 
            | | |W|W| | | 
            | | |B|W| | | 
            | | | | | | | 
            | | | | | | | 
            | | | | | | | `,
            {
                in: {
                    point: { x: 4, y: 2 },
                    color: StoneStats_1.StoneStatus.WHITE
                },
                exp: [{
                        point: { x: 4, y: 3 },
                        color: StoneStats_1.StoneStatus.WHITE,
                    }],
            }
        ],
        [
            `
            | | | | | | | 
            | | | | | | | 
            | | | |W|B| |
            | | |W|B| | |
            | | |B|W| | | 
            | | | | | | | 
            | | | | | | | 
            | | | | | | |  `,
            {
                in: {
                    point: { x: 5, y: 2 },
                    color: StoneStats_1.StoneStatus.BLACK
                },
                exp: [{
                        point: { x: 4, y: 3 },
                        color: StoneStats_1.StoneStatus.BLACK,
                    }],
            }
        ],
        [
            `
            | | | | | | | 
            | | | | | | | 
            | | | |W|W|W|
            | | |W|B| | |
            | | |B|W| | | 
            | | | | | | | 
            | | | | | | | 
            | | | | | | |  `,
            {
                in: {
                    point: { x: 6, y: 2 },
                    color: StoneStats_1.StoneStatus.WHITE
                },
                exp: [{
                        point: { x: 5, y: 2 },
                        color: StoneStats_1.StoneStatus.WHITE,
                    }],
            }
        ],
        [
            `
            | | | | | | | 
            | | | | | |B| 
            | | | |W|B|W|
            | | |W|B| | |
            | | |B|W| | | 
            | | | | | | | 
            | | | | | | | 
            | | | | | | |  `,
            {
                in: {
                    point: { x: 6, y: 1 },
                    color: StoneStats_1.StoneStatus.BLACK
                },
                exp: [{
                        point: { x: 5, y: 2 },
                        color: StoneStats_1.StoneStatus.BLACK,
                    }],
            }
        ],
        [
            `
            | | | | | |W| 
            | | | | | |W| 
            | | | |W|B|W|
            | | |W|B| | |
            | | |B|W| | | 
            | | | | | | | 
            | | | | | | | 
            | | | | | | |  `,
            {
                in: {
                    point: { x: 6, y: 0 },
                    color: StoneStats_1.StoneStatus.WHITE
                },
                exp: [{
                        point: { x: 6, y: 1 },
                        color: StoneStats_1.StoneStatus.WHITE,
                    }],
            }
        ],
        [
            `
            | | | | | |W|B
            | | | | | |B| 
            | | | |W|B|W|
            | | |W|B| | |
            | | |B|W| | | 
            | | | | | | | 
            | | | | | | | 
            | | | | | | |  `,
            {
                in: {
                    point: { x: 7, y: 0 },
                    color: StoneStats_1.StoneStatus.BLACK
                },
                exp: [{
                        point: { x: 6, y: 1 },
                        color: StoneStats_1.StoneStatus.BLACK,
                    }],
            }
        ],
        [
            `
            | | | | | |W|B
            | | | | | |B| 
            | | | |W|B|W|
            | | |W|W|W| |
            | | |B|W| | | 
            | | | | | | | 
            | | | | | | | 
            | | | | | | |  `,
            {
                in: {
                    point: { x: 5, y: 3 },
                    color: StoneStats_1.StoneStatus.WHITE
                },
                exp: [{
                        point: { x: 4, y: 3 },
                        color: StoneStats_1.StoneStatus.WHITE,
                    }],
            }
        ],
        [
            `
            | | | | | |W|B
            | | | | | |B| 
            | | | |W|B|W|
            | | |W|W|B| |
            | | |B|B|B| | 
            | | | | | | | 
            | | | | | | | 
            | | | | | | |  `,
            {
                in: {
                    point: { x: 5, y: 4 },
                    color: StoneStats_1.StoneStatus.BLACK
                },
                exp: [
                    {
                        point: { x: 5, y: 3 },
                        color: StoneStats_1.StoneStatus.BLACK,
                    },
                    {
                        point: { x: 4, y: 4 },
                        color: StoneStats_1.StoneStatus.BLACK,
                    }
                ],
            }
        ],
        [
            `
            | | | | | |W|B
            | | | | | |B| 
            | | | |W|B|W|
            | | |W|W|W|W|
            | | |B|B|B| | 
            | | | | | | | 
            | | | | | | | 
            | | | | | | |  `,
            {
                in: {
                    point: { x: 6, y: 3 },
                    color: StoneStats_1.StoneStatus.WHITE
                },
                exp: [
                    {
                        point: { x: 5, y: 3 },
                        color: StoneStats_1.StoneStatus.WHITE,
                    },
                ],
            }
        ],
        [
            `
            | | | | | |W|B
            | | | | | |B| 
            | | |B|B|B|W|
            | | |B|B|W|W|
            | | |B|B|B| | 
            | | | | | | | 
            | | | | | | | 
            | | | | | | |  `,
            {
                in: {
                    point: { x: 3, y: 2 },
                    color: StoneStats_1.StoneStatus.BLACK
                },
                exp: [
                    {
                        point: { x: 4, y: 2 },
                        color: StoneStats_1.StoneStatus.BLACK,
                    },
                    {
                        point: { x: 3, y: 3 },
                        color: StoneStats_1.StoneStatus.BLACK,
                    },
                    {
                        point: { x: 4, y: 3 },
                        color: StoneStats_1.StoneStatus.BLACK,
                    },
                ],
            }
        ],
        [
            `
            | | | | | |W|B
            | | | | |W|B| 
            | | |B|B|W|W|
            | | |B|B|W|W|
            | | |B|B|B| | 
            | | | | | | | 
            | | | | | | | 
            | | | | | | |  `,
            {
                in: {
                    point: { x: 5, y: 1 },
                    color: StoneStats_1.StoneStatus.WHITE
                },
                exp: [
                    {
                        point: { x: 5, y: 2 },
                        color: StoneStats_1.StoneStatus.WHITE,
                    },
                ],
            }
        ],
        [
            `
            | | | | | |W|B
            | | | | |W|B| 
            | | |B|B|W|B|
            | | |B|B|B|B|
            | | |B|B|B|B| 
            | | | | | | | 
            | | | | | | | 
            | | | | | | |  `,
            {
                in: {
                    point: { x: 6, y: 4 },
                    color: StoneStats_1.StoneStatus.BLACK
                },
                exp: [
                    {
                        point: { x: 5, y: 3 },
                        color: StoneStats_1.StoneStatus.BLACK,
                    },
                    {
                        point: { x: 6, y: 2 },
                        color: StoneStats_1.StoneStatus.BLACK,
                    },
                    {
                        point: { x: 6, y: 3 },
                        color: StoneStats_1.StoneStatus.BLACK,
                    },
                ],
            }
        ],
        [
            `
            | | | | | |W|B
            | | | | |W|B| 
            | | |B|B|W|W|
            | | |B|B|B|B|W
            | | |B|B|B|B| 
            | | | | | | | 
            | | | | | | | 
            | | | | | | |  `,
            {
                in: {
                    point: { x: 7, y: 3 },
                    color: StoneStats_1.StoneStatus.WHITE
                },
                exp: [
                    {
                        point: { x: 6, y: 2 },
                        color: StoneStats_1.StoneStatus.WHITE,
                    },
                ],
            }
        ],
        [
            `
            | | | | |B|W|B
            | | | | |W|B| 
            | | |B|B|W|W|
            | | |B|B|B|B|W
            | | |B|B|B|B| 
            | | | | | | | 
            | | | | | | | 
            | | | | | | |  `,
            {
                in: {
                    point: { x: 5, y: 0 },
                    color: StoneStats_1.StoneStatus.BLACK
                },
                exp: [
                    {
                        point: { x: 6, y: 0 },
                        color: StoneStats_1.StoneStatus.BLACK,
                    },
                    {
                        point: { x: 5, y: 1 },
                        color: StoneStats_1.StoneStatus.BLACK,
                    },
                    {
                        point: { x: 5, y: 2 },
                        color: StoneStats_1.StoneStatus.BLACK,
                    },
                ],
            }
        ],
        [
            `
            | | | | |B|W|B
            | | | | |W|B| 
            | | |B|B|W|W|
            | |W|W|W|W|W|W
            | | |B|B|B|B| 
            | | | | | | | 
            | | | | | | | 
            | | | | | | |  `,
            {
                in: {
                    point: { x: 2, y: 3 },
                    color: StoneStats_1.StoneStatus.WHITE
                },
                exp: [
                    {
                        point: { x: 3, y: 3 },
                        color: StoneStats_1.StoneStatus.WHITE,
                    },
                    {
                        point: { x: 4, y: 3 },
                        color: StoneStats_1.StoneStatus.WHITE,
                    },
                    {
                        point: { x: 5, y: 3 },
                        color: StoneStats_1.StoneStatus.WHITE,
                    },
                    {
                        point: { x: 6, y: 3 },
                        color: StoneStats_1.StoneStatus.WHITE,
                    },
                ],
            }
        ],
        [
            `
            | | | | |B|W|B
            | | | | |W|B| 
            | | |B|B|W|W|
            | |B|W|W|W|W|W
            |B| |B|B|B|B| 
            | | | | | | | 
            | | | | | | | 
            | | | | | | |  `,
            {
                in: {
                    point: { x: 1, y: 4 },
                    color: StoneStats_1.StoneStatus.BLACK
                },
                exp: [
                    {
                        point: { x: 2, y: 3 },
                        color: StoneStats_1.StoneStatus.BLACK,
                    },
                    {
                        point: { x: 2, y: 4 },
                        color: StoneStats_1.StoneStatus.NONE,
                    },
                ],
            }
        ],
    ])("%s", (title, testcase) => {
        board.reverse(testcase.in.point, testcase.in.color);
        console.log(board.toString());
        testcase.exp.forEach(exp => {
            expect(board.getSquare(exp.point)).toBe(exp.color);
        });
    });
});
