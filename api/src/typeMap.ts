import {BlackTea, FlavoredTea, FruitTea, GreenTea, Other} from "./models/Product";

export const typeMap = new Map([
    ["green", GreenTea],
    ["black", BlackTea],
    ["fruit", FruitTea],
    ["flavored", FlavoredTea],
    ["other", Other]
])