"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// 2. Create a Schema corresponding to the document interface.
const InquirySchema = new mongoose_1.default.Schema({
    name: String,
    mobile: String,
    email: String,
    noOfPerson: Number,
    destination: String,
    travellingDate: Date,
});
const Inquiry = mongoose_1.default.model('Inquiry', InquirySchema);
exports.default = Inquiry;
//# sourceMappingURL=inquiry.js.map