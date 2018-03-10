"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var qna_service_1 = require("./qna.service");
var QnaComponent = (function () {
    function QnaComponent(qnaService) {
        this.qnaService = qnaService;
        this.fetchData();
    }
    QnaComponent.prototype.fetchData = function () {
        var _this = this;
        this.qnaService.getData().subscribe(function (QnaRes) {
            if (QnaRes && QnaRes.response_list)
                _this.data = QnaRes.response_list;
            else if (QnaRes && QnaRes.error)
                _this.error = QnaRes.error;
        });
    };
    return QnaComponent;
}());
QnaComponent = __decorate([
    core_1.Component({
        selector: 'qna',
        templateUrl: './/qna.component.html',
        styleUrls: ['.//qna.component.css'],
    }),
    __metadata("design:paramtypes", [qna_service_1.QnaService])
], QnaComponent);
exports.QnaComponent = QnaComponent;
//# sourceMappingURL=qna.component.js.map