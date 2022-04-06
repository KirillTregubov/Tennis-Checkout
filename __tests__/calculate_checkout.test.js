"use strict";

// jest.mock( "../pages/calc" );
const checkout = require("../pages/api/calculate_checkout");

const item1 = { 'price': 10, 'quantity': 1 };
const item2 = { 'price': 10, 'quantity': 3 };
const item3 = { 'price': 20, 'quantity': 1 };

describe("Calculate Checkout Endpoint", () => {

    describe("subtotal", () => {

        it("should return 10 when getting the subtotal for item1", () => {
            expect(checkout.calcSubtotal([item1])).toBe(10);
        });

        it("should return 40 when getting the subtotal for item1, item2, item3", () => {
            expect(checkout.calcSubtotal([item1, item2, item3])).toBe(60);
        });
    });

    describe("discount", () => {

        it("should return 10 when getting the discount for CODE", () => {
            expect(checkout.getDiscount('CODE')).toBe(10);
        });

        it("should return 10 when getting the discount for code1", () => {
            expect(checkout.getDiscount('code1')).toBe(5);
        });

        it("should return 10 when getting the discount for tennis7", () => {
            expect(checkout.getDiscount('tennis7')).toBe(20);
        });

        it("should return 10 when getting the discount for invalid_code", () => {
            expect(checkout.getDiscount('invalid_code')).toBe(0);
        });

    });
});