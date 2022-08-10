"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const inquiry_1 = __importDefault(require("../models/inquiry"));
const router = (0, express_1.Router)();
router.post("/inquiry", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, mobile, email, noOfPerson, destination, travellingDate } = req.body;
        let inquiry = yield new inquiry_1.default({
            name: name,
            mobile: mobile,
            email: email,
            noOfPerson: noOfPerson,
            destination: destination,
            travellingDate: travellingDate,
        }).save();
        return res.json({
            resultCode: 200,
            message: "Successfully saved data"
        });
    }
    catch (e) {
        return res.status(400).json({
            resultCode: 400,
            message: "Something went wrong"
        });
    }
}));
exports.default = router;
//# sourceMappingURL=inquiry.js.map