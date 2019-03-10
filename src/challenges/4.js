// ---------------------------------------------------------
// Daily Coding Problem: Problem #4
// ---------------------------------------------------------
// This problem was asked by Stripe.
//
// Given an array of integers, find the first missing positive
// integer in linear time and constant space. In other words,
// find the lowest positive integer that does not exist in the
// array. The array can contain duplicates and negative numbers
// as well.
//
// For example, the input [3, 4, -1, 1] should give 2. The input
// [1, 2, 0] should give 3.
//
//You can modify the input array in-place.
// REMOVE::arguments:array

export const dcpChallenge4 = function() {
    let list = arguments[0]; //REMOVE:: used for execution purposes
    const lowestNumber = list.reduce((a, b) =>
        a && b >= 0 ? (a < b ? a : b) : 0
    );
    return calculateLowestNumber(lowestNumber + 1, list);
};

const calculateLowestNumber = (n, list) =>
    !list.includes(n) ? n : calculateLowestNumber(n + 1, list);
