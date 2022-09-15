(self.webpackChunkself_service = self.webpackChunkself_service || []).push([
    [69], {
        2999: (ae, de, y) => {
            "use strict";
            y.d(de, {
                k: () => ne
            });
            var a = y(2560);
            let ne = (() => {
                class N {
                    constructor() {
                        this.valueChanged = new a.vpe, this._onChange = f => {}, this._onTouched = () => {}
                    }
                    set value(f) {
                        if (f !== this.value) {
                            if (f !== this.valueA && f !== this.valueB) throw new Error(`value=${f} must be either valueA=${this.valueA} or valueB=${this.valueB}`);
                            this._value = f, this.ngModelValue = f !== this.valueA, this._onChange(f)
                        }
                    }
                    get value() {
                        return this._value
                    }
                    set formControlName(f) {
                        this._formControlName = f, this.inputId = `${this.formId}-${this.type}-switch-${this.formControlName}`
                    }
                    get formControlName() {
                        return this._formControlName
                    }
                    onChange(f) {
                        this.value = f, this.valueChanged.emit(f)
                    }
                    registerOnChange(f) {
                        this._onChange = f
                    }
                    registerOnTouched(f) {
                        this._onTouched = f
                    }
                    writeValue(f) {
                        this.value = f
                    }
                    setDisabledState(f) {
                        this.disabled = f
                    }
                }
                return N.\u0275fac = function(f) {
                    return new(f || N)
                }, N.\u0275dir = a.lG2({
                    type: N,
                    inputs: {
                        type: "type",
                        formId: "formId",
                        disabled: "disabled",
                        labelA: "labelA",
                        labelB: "labelB",
                        valueA: "valueA",
                        valueB: "valueB",
                        value: "value",
                        formControlName: "formControlName"
                    },
                    outputs: {
                        valueChanged: "valueChanged"
                    }
                }), N
            })()
        },
        3890: (ae, de, y) => {
            "use strict";
            y.d(de, {
                Z: () => z
            });
            var a = y(2560),
                p = y(2508),
                ne = y(2999),
                N = y(8699);
            let z = (() => {
                class f extends ne.k {}
                return f.\u0275fac = function() {
                    let K;
                    return function(T) {
                        return (K || (K = a.n5z(f)))(T || f)
                    }
                }(), f.\u0275cmp = a.Xpm({
                    type: f,
                    selectors: [
                        ["oper-client-toggle-switch"]
                    ],
                    features: [a._Bn([{
                        provide: p.JU,
                        multi: !0,
                        useExisting: (0, a.Gpc)(() => f)
                    }]), a.qOj],
                    decls: 10,
                    vars: 9,
                    consts: [
                        [1, "toggle-switch"],
                        [1, "switch-label"],
                        [1, "switch-wrap", 3, "for"],
                        ["type", "checkbox", 3, "id", "ngModel", "ngModelChange", "change", "blur"],
                        [1, "switch-panel"]
                    ],
                    template: function(O, T) {
                        1 & O && (a.TgZ(0, "label", 0)(1, "span", 1), a._uU(2), a.ALo(3, "translate"), a.qZA(), a.TgZ(4, "label", 2)(5, "input", 3), a.NdJ("ngModelChange", function(H) {
                            return T.ngModelValue = H
                        })("change", function() {
                            return T.onChange(T.ngModelValue ? T.valueB : T.valueA)
                        })("blur", function() {
                            return T._onTouched()
                        }), a.qZA(), a._UZ(6, "div", 4), a.qZA(), a.TgZ(7, "span", 1), a._uU(8), a.ALo(9, "translate"), a.qZA()()), 2 & O && (a.xp6(2), a.Oqu(a.lcZ(3, 5, T.labelA)), a.xp6(2), a.Q6J("for", T.inputId), a.xp6(1), a.Q6J("id", T.inputId)("ngModel", T.ngModelValue), a.xp6(3), a.Oqu(a.lcZ(9, 7, T.labelB)))
                    },
                    directives: [p.Wl, p.JJ, p.On],
                    pipes: [N.X$],
                    styles: ['@charset "UTF-8";[_nghost-%COMP%]{display:flex;height:2.5rem}.toggle-switch[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.toggle-switch[_ngcontent-%COMP%]   .switch-label[_ngcontent-%COMP%]{white-space:nowrap;font-size:12.5px}.toggle-switch[_ngcontent-%COMP%]   .switch-wrap[_ngcontent-%COMP%]{margin:0 .5rem;cursor:pointer;background:var(--color-primary-tint25);padding:.25rem;width:3rem;height:1.75rem;border-radius:.875rem}.toggle-switch[_ngcontent-%COMP%]   .switch-wrap[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]{position:absolute;opacity:0;width:0;height:0}.toggle-switch[_ngcontent-%COMP%]   .switch-wrap[_ngcontent-%COMP%]   .switch-panel[_ngcontent-%COMP%]{height:100%;display:grid;grid-template-columns:0fr 1fr 1fr;transition:.4s}.toggle-switch[_ngcontent-%COMP%]   .switch-wrap[_ngcontent-%COMP%]   .switch-panel[_ngcontent-%COMP%]:after{content:"";border-radius:50%;background:var(--primary-button-text-color);grid-column:2}.toggle-switch[_ngcontent-%COMP%]   .switch-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked + .switch-panel[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr 0fr}'],
                    changeDetection: 0
                }), f
            })()
        },
        4247: (ae, de, y) => {
            "use strict";
            y.d(de, {
                E: () => K
            });
            var a = y(1023),
                p = y(2560),
                ne = y(4945),
                N = y(4666),
                z = y(3034);
            const f = function(O) {
                return {
                    danger: O
                }
            };
            let K = (() => {
                class O {
                    constructor(I, H) {
                        this.tooltipService = I, this.elementRef = H, this.icon = a.Fuz, this.type = "info"
                    }
                    toggle(I) {
                        const H = this.elementRef.nativeElement.getBoundingClientRect();
                        this.tooltipService.toggle(this.text, H, this.parentContainer?.getBoundingClientRect()), I.stopPropagation()
                    }
                    ngOnDestroy() {
                        this.tooltipService.flush()
                    }
                    clickout(I) {
                        this.elementRef.nativeElement.contains(I.target) || this.tooltipService.flush()
                    }
                }
                return O.\u0275fac = function(I) {
                    return new(I || O)(p.Y36(ne.a), p.Y36(p.SBq))
                }, O.\u0275cmp = p.Xpm({
                    type: O,
                    selectors: [
                        ["oper-client-tooltip-indicator"]
                    ],
                    hostBindings: function(I, H) {
                        1 & I && p.NdJ("click", function(E) {
                            return H.clickout(E)
                        }, !1, p.evT)
                    },
                    inputs: {
                        text: "text",
                        parentContainer: "parentContainer",
                        icon: "icon",
                        type: "type"
                    },
                    decls: 2,
                    vars: 4,
                    consts: [
                        [1, "tooltip__indicator", 3, "ngClass", "click"],
                        [3, "icon"]
                    ],
                    template: function(I, H) {
                        1 & I && (p.TgZ(0, "div", 0), p.NdJ("click", function(E) {
                            return H.toggle(E)
                        }), p._UZ(1, "fa-icon", 1), p.qZA()), 2 & I && (p.Q6J("ngClass", p.VKq(2, f, "danger" === H.type)), p.xp6(1), p.Q6J("icon", H.icon))
                    },
                    directives: [N.mk, z.BN],
                    styles: ["[_nghost-%COMP%]{display:inline-block;margin-left:.5rem;cursor:pointer}.tooltip__indicator[_ngcontent-%COMP%]{font-weight:700;text-align:center;vertical-align:middle;--fa-primary-color: var(--tooltip-indicator-text-color);--fa-secondary-color: var(--tooltip-indicator-color);--fa-primary-opacity: 1;--fa-secondary-opacity: 1}.tooltip__indicator.danger[_ngcontent-%COMP%]{--fa-primary-color: var(--color-danger);--fa-secondary-color: var(--color-danger-tint75)}"]
                }), O
            })()
        },
        2069: (ae, de, y) => {
            "use strict";
            y.d(de, {
                r: () => j
            });
            var a = y(2560),
                p = y(2508),
                ne = y(5050),
                N = y(5921),
                z = y(2218),
                f = y(8233),
                K = y(9943);
            class O extends p.cw {
                constructor() {
                    super(...arguments), this.warnings = {}
                }
            }
            var T = y(1922),
                I = y(8699);
            let H = (() => {
                class c {
                    constructor(o) {
                        this.translate = o
                    }
                    nowMinusStartDateLessThanMonths(o) {
                        return l => {
                            const d = new Date(l.value.startDate);
                            if (!d) return l.warnings && delete l.warnings.nowMinusStartDateLessThanMonths, null;
                            const h = new Date,
                                A = 12 * (h.getUTCFullYear() - d.getUTCFullYear()) + (h.getUTCMonth() - d.getUTCMonth()) + (h.getUTCDate() - d.getUTCDate() > 0 ? 0 : -1);
                            return A < o && A > 0 ? (l.warnings || (l.warnings = {}), l.warnings.nowMinusStartDateLessThanMonths = {
                                minMonths: o
                            }) : l.warnings && delete l.warnings.nowMinusStartDateLessThanMonths, null
                        }
                    }
                    formatWarning(o, l = null) {
                        switch (o) {
                            case "nowMinusStartDateLessThanMonths":
                                return this.translate.instant("\xe7.question.warning.nowMinusStartDateLessThanMonths", l);
                            case "countryNotBelgium":
                                return "\xe7.question.warning.countryNotBelgium";
                            default:
                                return "\xe7.question.warning.default"
                        }
                    }
                    formatWarnings(o) {
                        return Object.keys(o).map(l => this.translate.instant(this.formatWarning(l, o[l])))
                    }
                }
                return c.\u0275fac = function(o) {
                    return new(o || c)(a.LFG(I.sK))
                }, c.\u0275prov = a.Yz7({
                    token: c,
                    factory: c.\u0275fac,
                    providedIn: "root"
                }), c
            })();
            var D = y(4666),
                E = y(4172),
                Nt = y(6908),
                v = y(7538),
                Te = y(1023),
                He = y(9115),
                Se = y(6942),
                lt = y(9151),
                _e = y(8759),
                qe = y(823),
                me = y(1464),
                $ = y(1969),
                st = y(4247),
                Q = y(3034),
                ct = y(7762),
                Je = y(2298),
                X = y(4505),
                De = y(6882),
                Be = y(1745);

            function Ue(c, g) {
                if (1 & c && a._UZ(0, "fa-icon", 5), 2 & c) {
                    const o = a.oxw();
                    a.Q6J("icon", o.iconShowPassword)("fixedWidth", !0)
                }
            }

            function Ge(c, g) {
                if (1 & c && a._UZ(0, "fa-icon", 5), 2 & c) {
                    const o = a.oxw(2);
                    a.Q6J("icon", o.iconHidePassword)("fixedWidth", !0)
                }
            }

            function Ot(c, g) {
                if (1 & c && (a.YNc(0, Ge, 1, 2, "fa-icon", 6), a.ALo(1, "async")), 2 & c) {
                    const o = a.oxw();
                    a.Q6J("ngIf", a.lcZ(1, 1, o.showPassword$))
                }
            }
            const It = function(c) {
                return {
                    "input-group--disabled": c
                }
            };
            let ee = (() => {
                class c {
                    constructor(o) {
                        this.control = o, this.showPassword$ = new X.X(!1), this.toggle$ = new z.xQ, this.iconShowPassword = v.Mdf, this.iconHidePassword = v.Aq, this.disableInput = !1, this.value = null, this.required = !1, this.valueChange = new a.vpe, this.blurEmit = new a.vpe, this.focusEmit = new a.vpe, this.destroy$ = new z.xQ, this.onTouchedCallback = De.Z, this.onChangeCallback = De.Z, this.control && (this.control.valueAccessor = this), this.handleToggle()
                    }
                    ngOnDestroy() {
                        this.destroy$.next(), this.destroy$.complete()
                    }
                    valueChanged(o) {
                        this.onTouchedCallback(), this.onChangeCallback(o), this.valueChange.emit(o)
                    }
                    onBlur() {
                        this.blurEmit.emit(), this.onTouchedCallback()
                    }
                    writeValue(o) {
                        this.value = o
                    }
                    registerOnChange(o) {
                        this.onChangeCallback = o
                    }
                    registerOnTouched(o) {
                        this.onTouchedCallback = o
                    }
                    setDisabledState(o) {
                        this.disableInput = o
                    }
                    handleToggle() {
                        this.toggle$.pipe((0, Be.M)(this.showPassword$), (0, _e.b)(([o, l]) => {
                            this.showPassword$.next(!l)
                        }), (0, N.R)(this.destroy$)).subscribe()
                    }
                }
                return c.\u0275fac = function(o) {
                    return new(o || c)(a.Y36(p.a5, 10))
                }, c.\u0275cmp = a.Xpm({
                    type: c,
                    selectors: [
                        ["oper-client-input-password"]
                    ],
                    inputs: {
                        disableInput: "disableInput",
                        value: "value",
                        required: "required",
                        key: "key",
                        name: "name"
                    },
                    outputs: {
                        valueChange: "valueChange",
                        blurEmit: "blurEmit",
                        focusEmit: "focusEmit"
                    },
                    decls: 8,
                    vars: 15,
                    consts: [
                        [1, "input-group", 3, "ngClass"],
                        ["inputmode", "password", 1, "input-group__form-item-input", 3, "id", "name", "required", "ngModel", "type", "ngModelChange", "blur", "focus"],
                        ["type", "button", 1, "input-group-addition", "input-group-addition--append", "toggleShowPassword", 3, "click"],
                        [3, "icon", "fixedWidth", 4, "ngIf", "ngIfElse"],
                        ["hidePassword", ""],
                        [3, "icon", "fixedWidth"],
                        [3, "icon", "fixedWidth", 4, "ngIf"]
                    ],
                    template: function(o, l) {
                        if (1 & o && (a.TgZ(0, "div", 0)(1, "input", 1), a.NdJ("ngModelChange", function(h) {
                                return l.value = h
                            })("ngModelChange", function(h) {
                                return l.valueChanged(h)
                            })("blur", function() {
                                return l.onBlur()
                            })("focus", function() {
                                return l.focusEmit.emit()
                            }), a.ALo(2, "async"), a.qZA(), a.TgZ(3, "button", 2), a.NdJ("click", function() {
                                return l.toggle$.next()
                            }), a.YNc(4, Ue, 1, 2, "fa-icon", 3), a.ALo(5, "async"), a.YNc(6, Ot, 2, 3, "ng-template", null, 4, a.W1O), a.qZA()()), 2 & o) {
                            const d = a.MAs(7);
                            a.Q6J("ngClass", a.VKq(13, It, l.disableInput)), a.xp6(1), a.Q6J("id", l.key)("name", l.name)("required", l.required)("ngModel", l.value)("type", a.lcZ(2, 9, l.showPassword$) ? "text" : "password"), a.uIk("disabled", l.disableInput), a.xp6(3), a.Q6J("ngIf", !1 === a.lcZ(5, 11, l.showPassword$))("ngIfElse", d)
                        }
                    },
                    directives: [D.mk, p.Fj, p.Q7, p.JJ, p.On, D.O5, Q.BN],
                    pipes: [D.Ov],
                    styles: ['@charset "UTF-8";.oper-form[_ngcontent-%COMP%]{position:static}.oper-form-item[_ngcontent-%COMP%]:not(:last-child){margin-bottom:1.5rem}.oper-form-label[_ngcontent-%COMP%]{display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-bottom:1rem}.oper-form-error[_ngcontent-%COMP%]{color:var(--color-danger)}.oper-form-errors[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0;color:#c00;border-radius:.5rem;background-color:#fcf2f2}.oper-form-errors-item[_ngcontent-%COMP%]{padding:.75rem}.oper-form-errors-item[_ngcontent-%COMP%]:not(:last-child){border-bottom:1px solid #f7d6d6}.oper-form-textInput[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]{font-size:15px;display:block;font-family:Helvetica Neue,sans-serif;font-weight:400;border:none;padding:0;margin:0;outline:none;width:100%;-webkit-appearance:none;appearance:none;box-sizing:border-box;height:2.5rem;padding:0 .75rem;border-radius:var(--input-border-radius, .5rem);border:var(--input-border, 1px solid rgba(0, 0, 0, .25));color:var(--input-text-color);background:var(--input-background, white)}.oper-form-textInput[_ngcontent-%COMP%]::placeholder, .input-group[_ngcontent-%COMP%]::placeholder{color:#666}.oper-form-textInput[_ngcontent-%COMP%]:focus, .input-group[_ngcontent-%COMP%]:focus{box-shadow:0 0 0 3px var(--color-primary-alpha25)}.oper-form-textInput[_ngcontent-%COMP%]:disabled, .input-group[_ngcontent-%COMP%]:disabled{opacity:.66}.oper-form-textInput.oper-form-textInput--invalid[_ngcontent-%COMP%], .oper-form-textInput--invalid.input-group[_ngcontent-%COMP%], .oper-form-textInput.ng-touched.ng-invalid[_ngcontent-%COMP%], .ng-touched.ng-invalid.input-group[_ngcontent-%COMP%]{border-color:#c00;color:#c00;box-shadow:0 0 0 5px #cc000040}.oper-form-textInput[_ngcontent-%COMP%]:-webkit-autofill, .input-group[_ngcontent-%COMP%]:-webkit-autofill, .oper-form-textInput[_ngcontent-%COMP%]:-webkit-autofill:hover, .oper-form-textInput[_ngcontent-%COMP%]:-webkit-autofill:focus, .oper-form-textInput[_ngcontent-%COMP%]:-webkit-autofill:active{border-radius:var(--input-border-radius, .5rem);border:var(--input-border, 1px solid rgba(0, 0, 0, .25));color:var(--input-text-color);background:var(--input-background, white)}.input-group[_ngcontent-%COMP%]{display:flex;position:relative}.input-group--disabled[_ngcontent-%COMP%]{background-color:var(--input-background-disabled);color:var(--input-text-color-tint50)}.input-group__form-item-input[_ngcontent-%COMP%]{width:100%;border:none;background-color:transparent;color:var(--input-text-color)}.input-group__form-item-input[_ngcontent-%COMP%]:focus{outline:none}.input-group[_ngcontent-%COMP%]   .input-group-addition[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;box-sizing:border-box;height:2.25rem;text-align:center;font-weight:700}.input-group[_ngcontent-%COMP%]   .input-group-addition--prepend[_ngcontent-%COMP%]{margin-right:.5rem}.input-group[_ngcontent-%COMP%]   .input-group-addition--append[_ngcontent-%COMP%]{margin-left:.5rem}.input-group[_ngcontent-%COMP%]   .input-group-addition--inactive[_ngcontent-%COMP%]{color:var(--input-text-color-tint50)}.input-group[_ngcontent-%COMP%]   .input-group-addition--inactive.--clickable[_ngcontent-%COMP%]{cursor:pointer}.input-group[_ngcontent-%COMP%]   .input-group-addition--inactive.--clickable[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:active, .input-group[_ngcontent-%COMP%]   .input-group-addition--active[_ngcontent-%COMP%]{color:var(--input-text-color)}.input-group[_ngcontent-%COMP%]   .input-group-addition--active.--clickable[_ngcontent-%COMP%]{cursor:pointer}.input-group[_ngcontent-%COMP%]   .input-group-addition--active.--clickable[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:active{color:var(--input-text-color-tint50)}.toggleShowPassword[_ngcontent-%COMP%]{background-color:transparent;border:none;color:var(--color-text-primary)}'],
                    changeDetection: 0
                }), c
            })();
            var xe = y(3054),
                Ne = y(4805);

            function Ve(c, g) {
                if (1 & c) {
                    const o = a.EpF();
                    a.TgZ(0, "ng-select", 4, 5), a.NdJ("ngModelChange", function(d) {
                        return a.CHM(o), a.oxw(2).value = d
                    })("change", function(d) {
                        return a.CHM(o), a.oxw(2).onValueChanged(d)
                    })("clear", function() {
                        return a.CHM(o), a.oxw(2).onValueChanged(null)
                    })("close", function() {
                        return a.CHM(o), a.oxw(2).onClose()
                    })("blur", function() {
                        return a.CHM(o), a.oxw(2).onTouchedCallback()
                    })("open", function() {
                        a.CHM(o);
                        const d = a.MAs(1);
                        return a.oxw(2).onOpen(d)
                    }), a.ALo(2, "async"), a.qZA()
                }
                if (2 & c) {
                    const o = a.oxw(2);
                    a.ekj("ng-valid", null == o.control ? null : o.control.valid)("ng-invalid", null == o.control ? null : o.control.invalid)("ng-touched", null == o.control ? null : o.control.touched), a.Q6J("ngClass", a.lcZ(2, 19, o.selectedClass$))("appendTo", o.appendTo)("bindValue", o.bindValue)("bindLabel", o.bindLabel)("items", o.optionsTransformed)("clearable", o.clearable)("searchable", o.searchable)("placeholder", o.placeholder)("ngModel", o.value)("disabled", o.disabled)("multiple", o.multiple)("closeOnSelect", !o.multiple)("searchFn", o.searchFn)
                }
            }

            function pe(c, g) {
                if (1 & c && (a.ynx(0), a.YNc(1, Ve, 3, 21, "ng-select", 3), a.ALo(2, "async"), a.BQk()), 2 & c) {
                    const o = a.oxw(),
                        l = a.MAs(3);
                    a.xp6(1), a.Q6J("ngIf", "ng-select-oper--status" !== a.lcZ(2, 2, o.selectedClass$))("ngIfElse", l)
                }
            }

            function _(c, g) {
                if (1 & c && (a.TgZ(0, "option", 9), a._uU(1), a.ALo(2, "translate"), a.qZA()), 2 & c) {
                    const o = a.oxw(2);
                    a.Udp("display", o.clearable && "null" !== o.value && null !== o.value ? void 0 : "none"), a.Q6J("value", null)("disabled", !o.clearable || "null" === o.value || null === o.value), a.xp6(1), a.Oqu("null" === o.value || null === o.value ? o.placeholder : a.lcZ(2, 5, "\xe7.question.clearSelection"))
                }
            }

            function Yt(c, g) {
                if (1 & c && (a.TgZ(0, "option", 10), a._uU(1), a.qZA()), 2 & c) {
                    const o = g.$implicit,
                        l = a.oxw(2);
                    a.Q6J("value", o[l.bindValue]), a.xp6(1), a.hij("", o[l.bindLabel], " ")
                }
            }

            function Pt(c, g) {
                if (1 & c) {
                    const o = a.EpF();
                    a.TgZ(0, "select", 6), a.NdJ("ngModelChange", function(d) {
                        return a.CHM(o), a.oxw().value = d
                    })("focusout", function(d) {
                        return a.CHM(o), a.oxw().onFocusOut(d)
                    })("ngModelChange", function() {
                        a.CHM(o);
                        const d = a.oxw();
                        return d.onSelectModelChange(d.value)
                    }), a.YNc(1, _, 3, 7, "option", 7), a.YNc(2, Yt, 2, 2, "option", 8), a.qZA()
                }
                if (2 & c) {
                    const o = a.oxw();
                    a.ekj("ng-valid", null == o.control ? null : o.control.valid)("ng-invalid", null == o.control ? null : o.control.invalid)("ng-touched", null == o.control ? null : o.control.touched)("no-value-selected", null === o.value || "null" === o.value), a.Q6J("required", !o.clearable)("disabled", o.disabled)("ngModel", o.value), a.xp6(1), a.Q6J("ngIf", o.clearable || "null" === o.value || null === o.value), a.xp6(1), a.Q6J("ngForOf", o.optionsTransformed)
                }
            }

            function Oe(c, g) {
                if (1 & c && (a.TgZ(0, "div", 14)(1, "span", 15), a.ALo(2, "safe"), a.qZA(), a.TgZ(3, "span", 16), a._uU(4), a.qZA()()), 2 & c) {
                    const o = g.item,
                        l = a.oxw(2);
                    a.xp6(1), a.Akn(a.xi3(2, 3, "background-color:" + o.color, "style")), a.xp6(3), a.hij("", o[l.bindLabel], " ")
                }
            }

            function dt(c, g) {
                if (1 & c) {
                    const o = a.EpF();
                    a.TgZ(0, "ng-select", 11, 12), a.NdJ("ngModelChange", function(d) {
                        return a.CHM(o), a.oxw().value = d
                    })("change", function(d) {
                        return a.CHM(o), a.oxw().onValueChanged(d)
                    })("clear", function() {
                        return a.CHM(o), a.oxw().onValueChanged(null)
                    })("close", function() {
                        return a.CHM(o), a.oxw().onClose()
                    })("blur", function() {
                        return a.CHM(o), a.oxw().onTouchedCallback()
                    })("open", function() {
                        a.CHM(o);
                        const d = a.MAs(1);
                        return a.oxw().onOpen(d)
                    }), a.ALo(2, "async"), a.YNc(3, Oe, 5, 6, "ng-template", 13), a.qZA()
                }
                if (2 & c) {
                    const o = a.oxw();
                    a.ekj("ng-valid", null == o.control ? null : o.control.valid)("ng-invalid", null == o.control ? null : o.control.invalid)("ng-touched", null == o.control ? null : o.control.touched), a.Q6J("ngClass", a.lcZ(2, 19, o.selectedClass$))("appendTo", o.appendTo)("bindValue", o.bindValue)("bindLabel", o.bindLabel)("items", o.optionsTransformed)("clearable", o.clearable)("searchable", o.searchable)("placeholder", o.placeholder)("ngModel", o.value)("disabled", o.disabled)("multiple", o.multiple)("closeOnSelect", !o.multiple)("searchFn", o.searchFn)
                }
            }
            let Lt = (() => {
                class c {
                    constructor(o, l, d) {
                        this.control = o, this.translateService = l, this.deviceDetectorService = d, this.ngSelectClass = "ng-select-oper", this.placeholder = "", this.clearable = !0, this.searchable = !0, this.value = null, this.disabled = !1, this.bindValue = "id", this.bindLabel = "translatedKey", this.appendTo = "body", this.multiple = !1, this.alreadySorted = !1, this.closeOnHostScroll = !1, this.valueChange = new a.vpe, this.selectedValueChange = new a.vpe, this.optionsTransformed = [], this.selectedClass$ = new X.X("ng-select-oper"), this._closingComponentRef = null, this.onTouchedCallback = De.Z, this.onChangeCallback = De.Z, this.searchFn = (h, q) => {
                            let L = q && q[this.bindLabel];
                            return !L && "string" == typeof q && (L = q), !!L && L.toLocaleLowerCase().startsWith(h.toLocaleLowerCase())
                        }, this.control && (this.control.valueAccessor = this), l.onLangChange.subscribe(() => {
                            Array.isArray(this.options) && this.transformOptions()
                        })
                    }
                    ngOnChanges(o) {
                        o.options && Array.isArray(this.options) && this.transformOptions(), (o.ngSelectClass || o.value) && this.handleSelectClass()
                    }
                    handleSelectClass() {
                        !this.ngSelectClass || this.selectedClass$.next(this.ngSelectClass)
                    }
                    transformOptions() {
                        this.optionsTransformed = this.options.map(o => o.key ? {
                            ...o,
                            [this.bindLabel]: this.translateService.instant(o.key)
                        } : o).filter(o => !o?.key || o[this.bindLabel]), this.alreadySorted || this.optionsTransformed.sort((o, l) => "number" != typeof o[this.bindLabel] && Number.isNaN(Number.parseFloat(o[this.bindLabel])) ? "string" == typeof o[this.bindLabel] ? o[this.bindLabel].localeCompare(l[this.bindLabel]) : 0 : o[this.bindLabel] - l[this.bindLabel])
                    }
                    onFocusOut(o) {
                        this.onTouchedCallback()
                    }
                    onValueChanged(o) {
                        let l;
                        l = o ? Array.isArray(o) ? o.map(d => d[this.bindValue]) : o[this.bindValue] : o, this.onChangeCallback(l), this.onTouchedCallback(), setTimeout(() => {
                            this.valueChange.emit(l), this.selectedValueChange.emit(l)
                        })
                    }
                    onSelectModelChange(o) {
                        const l = this.optionsTransformed.find(d => JSON.stringify(d[this.bindValue]) === o);
                        this.onValueChanged(l || null)
                    }
                    writeValue(o) {
                        this.value = o
                    }
                    registerOnChange(o) {
                        this.onChangeCallback = o
                    }
                    registerOnTouched(o) {
                        this.onTouchedCallback = o
                    }
                    setDisabledState(o) {
                        this.disabled = o
                    }
                    onOpen(o) {
                        this._closingComponentRef = o, setTimeout(() => {
                            if (!o.dropdownId || !o.appendTo) return;
                            const l = document.getElementById(o.dropdownId),
                                d = document.querySelector(o.appendTo);
                            if (l) {
                                const h = o.element.getBoundingClientRect(),
                                    q = d.getBoundingClientRect();
                                l.style.left = h.left - q.left + "px", l.style.width = h.width + "px", l.style.minWidth = h.width + "px", l.style.maxWidth = h.width + "px"
                            }
                        })
                    }
                    onClose() {
                        this.onTouchedCallback(), this._closingComponentRef = null
                    }
                    onScroll(o) {
                        this.closeOnHostScroll && this._closingComponentRef && (o.target.className?.indexOf("ng-dropdown-panel-items") > -1 || this._closingComponentRef?.close())
                    }
                }
                return c.\u0275fac = function(o) {
                    return new(o || c)(a.Y36(p.a5, 10), a.Y36(I.sK), a.Y36(me.x0))
                }, c.\u0275cmp = a.Xpm({
                    type: c,
                    selectors: [
                        ["oper-client-select"]
                    ],
                    hostBindings: function(o, l) {
                        1 & o && a.NdJ("scroll", function(h) {
                            return l.onScroll(h)
                        }, !1, a.Jf7)
                    },
                    inputs: {
                        ngSelectClass: "ngSelectClass",
                        options: "options",
                        placeholder: "placeholder",
                        formGroup: "formGroup",
                        formControlName: "formControlName",
                        clearable: "clearable",
                        searchable: "searchable",
                        value: "value",
                        disabled: "disabled",
                        bindValue: "bindValue",
                        bindLabel: "bindLabel",
                        appendTo: "appendTo",
                        multiple: "multiple",
                        alreadySorted: "alreadySorted",
                        closeOnHostScroll: "closeOnHostScroll"
                    },
                    outputs: {
                        valueChange: "valueChange",
                        selectedValueChange: "selectedValueChange"
                    },
                    features: [a.TTD],
                    decls: 4,
                    vars: 2,
                    consts: [
                        [4, "ngIf"],
                        ["class", "select", 3, "ng-valid", "ng-invalid", "ng-touched", "no-value-selected", "required", "disabled", "ngModel", "ngModelChange", "focusout", 4, "ngIf"],
                        ["statusSelect", ""],
                        ["class", "ng-select-oper", 3, "ngClass", "appendTo", "bindValue", "bindLabel", "ng-valid", "ng-invalid", "ng-touched", "items", "clearable", "searchable", "placeholder", "ngModel", "disabled", "multiple", "closeOnSelect", "searchFn", "ngModelChange", "change", "clear", "close", "blur", "open", 4, "ngIf", "ngIfElse"],
                        [1, "ng-select-oper", 3, "ngClass", "appendTo", "bindValue", "bindLabel", "items", "clearable", "searchable", "placeholder", "ngModel", "disabled", "multiple", "closeOnSelect", "searchFn", "ngModelChange", "change", "clear", "close", "blur", "open"],
                        ["ngSelectOper", ""],
                        [1, "select", 3, "required", "disabled", "ngModel", "ngModelChange", "focusout"],
                        [3, "value", "display", "disabled", 4, "ngIf"],
                        [3, "value", 4, "ngFor", "ngForOf"],
                        [3, "value", "disabled"],
                        [3, "value"],
                        [1, "ng-select-oper--status", 3, "ngClass", "appendTo", "bindValue", "bindLabel", "items", "clearable", "searchable", "placeholder", "ngModel", "disabled", "multiple", "closeOnSelect", "searchFn", "ngModelChange", "change", "clear", "close", "blur", "open"],
                        ["ngSelectOperStatus", ""],
                        ["ng-option-tmp", "", "ng-label-tmp", ""],
                        [1, "status-option"],
                        [1, "dot"],
                        [1, "text"]
                    ],
                    template: function(o, l) {
                        1 & o && (a.YNc(0, pe, 3, 4, "ng-container", 0), a.YNc(1, Pt, 3, 13, "select", 1), a.YNc(2, dt, 4, 21, "ng-template", null, 2, a.W1O)), 2 & o && (a.Q6J("ngIf", l.multiple || l.deviceDetectorService.isDesktop()), a.xp6(1), a.Q6J("ngIf", !l.multiple && !l.deviceDetectorService.isDesktop()))
                    },
                    directives: [D.O5, xe.w9, D.mk, p.JJ, p.On, p.EJ, p.Q7, p.YN, p.Kr, D.sg, xe.ir, xe.mR],
                    pipes: [D.Ov, I.X$, Ne.y],
                    styles: ['@charset "UTF-8";.ng-select.ng-select-opened>.ng-select-container{background:#fff;border-color:#b3b3b3 #ccc #d9d9d9}.ng-select.ng-select-opened>.ng-select-container:hover{box-shadow:none}.ng-select.ng-select-opened>.ng-select-container .ng-arrow{top:-2px;border-color:transparent transparent #999;border-width:0 5px 5px}.ng-select.ng-select-opened>.ng-select-container .ng-arrow:hover{border-color:transparent transparent #333}.ng-select.ng-select-opened.ng-select-top>.ng-select-container{border-top-right-radius:0;border-top-left-radius:0}.ng-select.ng-select-opened.ng-select-right>.ng-select-container{border-top-right-radius:0;border-bottom-right-radius:0}.ng-select.ng-select-opened.ng-select-bottom>.ng-select-container{border-bottom-right-radius:0;border-bottom-left-radius:0}.ng-select.ng-select-opened.ng-select-left>.ng-select-container{border-top-left-radius:0;border-bottom-left-radius:0}.ng-select.ng-select-focused:not(.ng-select-opened)>.ng-select-container{border-color:#007eff;box-shadow:inset 0 1px 1px #00000013,0 0 0 3px #007eff1a}.ng-select.ng-select-disabled>.ng-select-container{background-color:#f9f9f9}.ng-select .ng-has-value .ng-placeholder{display:none}.ng-select .ng-select-container{color:#333;background-color:#fff;border-radius:4px;border:1px solid #ccc;min-height:36px;align-items:center}.ng-select .ng-select-container:hover{box-shadow:0 1px #0000000f}.ng-select .ng-select-container .ng-value-container{align-items:center;padding-left:10px}[dir=rtl] .ng-select .ng-select-container .ng-value-container{padding-right:10px;padding-left:0}.ng-select .ng-select-container .ng-value-container .ng-placeholder{color:#999}.ng-select.ng-select-single .ng-select-container{height:36px}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{top:5px;left:0;padding-left:10px;padding-right:50px}[dir=rtl] .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{padding-right:10px;padding-left:50px}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value{background-color:#f9f9f9;border:1px solid #e6e6e6}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-label{padding:0 5px}.ng-select.ng-select-multiple .ng-select-container .ng-value-container{padding-top:5px;padding-left:7px}[dir=rtl] .ng-select.ng-select-multiple .ng-select-container .ng-value-container{padding-right:7px;padding-left:0}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{font-size:.9em;margin-bottom:5px;color:#333;background-color:#ebf5ff;border-radius:2px;margin-right:5px}[dir=rtl] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{margin-right:0;margin-left:5px}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled{background-color:#f9f9f9}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-label{padding-left:5px}[dir=rtl] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-label{padding-left:0;padding-right:5px}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-label,.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:inline-block;padding:1px 5px}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon:hover{background-color:#d1e8ff}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.left{border-right:1px solid #b8dbff}[dir=rtl] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.left{border-left:1px solid #b8dbff;border-right:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.right{border-left:1px solid #b8dbff}[dir=rtl] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.right{border-left:0;border-right:1px solid #b8dbff}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{padding:0 0 3px 3px}[dir=rtl] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{padding:0 3px 3px 0}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input>input{color:#000}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{top:5px;padding-bottom:5px;padding-left:3px}[dir=rtl] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{padding-right:3px;padding-left:0}.ng-select .ng-clear-wrapper{color:#999}.ng-select .ng-clear-wrapper:hover .ng-clear{color:#d0021b}.ng-select .ng-spinner-zone{padding:5px 5px 0 0}[dir=rtl] .ng-select .ng-spinner-zone{padding:5px 0 0 5px}.ng-select .ng-arrow-wrapper{width:25px;padding-right:5px}[dir=rtl] .ng-select .ng-arrow-wrapper{padding-left:5px;padding-right:0}.ng-select .ng-arrow-wrapper:hover .ng-arrow{border-top-color:#666}.ng-select .ng-arrow-wrapper .ng-arrow{border-color:#999 transparent transparent;border-style:solid;border-width:5px 5px 2.5px}.ng-dropdown-panel{background-color:#fff;border:1px solid #ccc;box-shadow:0 1px #0000000f;left:0}.ng-dropdown-panel.ng-select-top{bottom:100%;border-top-right-radius:4px;border-top-left-radius:4px;border-bottom-color:#e6e6e6;margin-bottom:-1px}.ng-dropdown-panel.ng-select-top .ng-dropdown-panel-items .ng-option:first-child{border-top-right-radius:4px;border-top-left-radius:4px}.ng-dropdown-panel.ng-select-right{left:100%;top:0;border-top-right-radius:4px;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-bottom-color:#e6e6e6;margin-bottom:-1px}.ng-dropdown-panel.ng-select-right .ng-dropdown-panel-items .ng-option:first-child{border-top-right-radius:4px}.ng-dropdown-panel.ng-select-bottom{top:100%;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-top-color:#e6e6e6;margin-top:-1px}.ng-dropdown-panel.ng-select-bottom .ng-dropdown-panel-items .ng-option:last-child{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.ng-dropdown-panel.ng-select-left{left:-100%;top:0;border-top-left-radius:4px;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-bottom-color:#e6e6e6;margin-bottom:-1px}.ng-dropdown-panel.ng-select-left .ng-dropdown-panel-items .ng-option:first-child{border-top-left-radius:4px}.ng-dropdown-panel .ng-dropdown-header{border-bottom:1px solid #ccc;padding:5px 7px}.ng-dropdown-panel .ng-dropdown-footer{border-top:1px solid #ccc;padding:5px 7px}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{-webkit-user-select:none;user-select:none;padding:8px 10px;font-weight:500;color:#0000008a;cursor:pointer}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-disabled{cursor:default}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-marked{background-color:#f5faff}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-selected,.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-selected.ng-option-marked{color:#0000008a;background-color:#ebf5ff;font-weight:600}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{background-color:#fff;color:#000000de;padding:8px 10px}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected,.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected.ng-option-marked{color:#333;background-color:#ebf5ff}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected .ng-option-label,.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected.ng-option-marked .ng-option-label{font-weight:600}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-marked{background-color:#f5faff;color:#333}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-disabled{color:#ccc}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-child{padding-left:22px}[dir=rtl] .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-child{padding-right:22px;padding-left:0}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-tag-label{font-size:80%;font-weight:400;padding-right:5px}[dir=rtl] .ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-tag-label{padding-left:5px;padding-right:0}[dir=rtl] .ng-dropdown-panel{direction:rtl;text-align:right}.oper-select,.oper-select--secondary,.oper-select--primary{display:inline-block;font-size:15px;font-family:Helvetica Neue,sans-serif;font-weight:700;height:2.5rem;padding:0 2rem 0 .75rem;max-width:100%;box-sizing:border-box;margin:0;border:var(--input-border);border-radius:var(--input-border-radius);-webkit-appearance:none;appearance:none;color:var(--input-text-color);background:var(--input-background);background-repeat:no-repeat,repeat;background-position:right .75rem top 50%,0 0;background-size:.75rem auto,100%}.oper-select::-ms-expand,.oper-select--secondary::-ms-expand,.oper-select--primary::-ms-expand{display:none}.oper-select:not([disabled]):hover,.oper-select--secondary:not([disabled]):hover,.oper-select--primary:not([disabled]):hover{background:var(--input-background)}.oper-select:focus,.oper-select--secondary:focus,.oper-select--primary:focus{outline:none;border:var(--input-border);box-shadow:0 0 0 5px var(--color-primary-alpha25)}.oper-select.no-value-selected,.no-value-selected.oper-select--secondary,.no-value-selected.oper-select--primary{color:var(--input-text-color)}.oper-select option,.oper-select--secondary option,.oper-select--primary option{font-weight:400}*[dir=rtl] .oper-select,*[dir=rtl] .oper-select--secondary,*[dir=rtl] .oper-select--primary,:root:lang(ar) .oper-select,:root:lang(ar) .oper-select--secondary,:root:lang(ar) .oper-select--primary,:root:lang(iw) .oper-select,:root:lang(iw) .oper-select--secondary,:root:lang(iw) .oper-select--primary{background-position:left .75rem top 50%,0 0;padding:0 .75rem 0 2rem}.oper-select:disabled,.oper-select--secondary:disabled,.oper-select--primary:disabled,.oper-select[aria-disabled=true],[aria-disabled=true].oper-select--secondary,[aria-disabled=true].oper-select--primary{opacity:.66}@media (pointer: coarse){.oper-select,.oper-select--secondary,.oper-select--primary{font-size:16px}}.oper-select.ng-touched.ng-invalid,.ng-touched.ng-invalid.oper-select--secondary,.ng-touched.ng-invalid.oper-select--primary{border-color:#c00;box-shadow:0 0 0 5px #cc000040}.oper-select--primary{color:var(--input-text-color);background:var(--input-background);background-image:url(data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhciIgZGF0YS1pY29uPSJjaGV2cm9uLWRvd24iIGNsYXNzPSJzdmctaW5saW5lLS1mYSBmYS1jaGV2cm9uLWRvd24gZmEtdy0xNCIgcm9sZT0iaW1nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNNDQxLjkgMTY3LjNsLTE5LjgtMTkuOGMtNC43LTQuNy0xMi4zLTQuNy0xNyAwTDIyNCAzMjguMiA0Mi45IDE0Ny41Yy00LjctNC43LTEyLjMtNC43LTE3IDBMNi4xIDE2Ny4zYy00LjcgNC43LTQuNyAxMi4zIDAgMTdsMjA5LjQgMjA5LjRjNC43IDQuNyAxMi4zIDQuNyAxNyAwbDIwOS40LTIwOS40YzQuNy00LjcgNC43LTEyLjMgMC0xN3oiPjwvcGF0aD48L3N2Zz4=),var(--input-text-color)}.oper-select--primary:not([disabled]):hover{background:var(--input-background);background-image:url(data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhciIgZGF0YS1pY29uPSJjaGV2cm9uLWRvd24iIGNsYXNzPSJzdmctaW5saW5lLS1mYSBmYS1jaGV2cm9uLWRvd24gZmEtdy0xNCIgcm9sZT0iaW1nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNNDQxLjkgMTY3LjNsLTE5LjgtMTkuOGMtNC43LTQuNy0xMi4zLTQuNy0xNyAwTDIyNCAzMjguMiA0Mi45IDE0Ny41Yy00LjctNC43LTEyLjMtNC43LTE3IDBMNi4xIDE2Ny4zYy00LjcgNC43LTQuNyAxMi4zIDAgMTdsMjA5LjQgMjA5LjRjNC43IDQuNyAxMi4zIDQuNyAxNyAwbDIwOS40LTIwOS40YzQuNy00LjcgNC43LTEyLjMgMC0xN3oiPjwvcGF0aD48L3N2Zz4=),var(--input-text-color)}.oper-select--primary:focus{box-shadow:0 0 0 5px var(--color-primary-alpha25);color:var(--input-text-color)}.oper-select--secondary{color:var(--input-text-color);background:var(--input-background);background-image:url(data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhciIgZGF0YS1pY29uPSJjaGV2cm9uLWRvd24iIGNsYXNzPSJzdmctaW5saW5lLS1mYSBmYS1jaGV2cm9uLWRvd24gZmEtdy0xNCIgcm9sZT0iaW1nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNNDQxLjkgMTY3LjNsLTE5LjgtMTkuOGMtNC43LTQuNy0xMi4zLTQuNy0xNyAwTDIyNCAzMjguMiA0Mi45IDE0Ny41Yy00LjctNC43LTEyLjMtNC43LTE3IDBMNi4xIDE2Ny4zYy00LjcgNC43LTQuNyAxMi4zIDAgMTdsMjA5LjQgMjA5LjRjNC43IDQuNyAxMi4zIDQuNyAxNyAwbDIwOS40LTIwOS40YzQuNy00LjcgNC43LTEyLjMgMC0xN3oiPjwvcGF0aD48L3N2Zz4=),var(--input-text-color)}.oper-select--secondary:not([disabled]):hover{background:var(--input-background);background-image:url(data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhciIgZGF0YS1pY29uPSJjaGV2cm9uLWRvd24iIGNsYXNzPSJzdmctaW5saW5lLS1mYSBmYS1jaGV2cm9uLWRvd24gZmEtdy0xNCIgcm9sZT0iaW1nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNNDQxLjkgMTY3LjNsLTE5LjgtMTkuOGMtNC43LTQuNy0xMi4zLTQuNy0xNyAwTDIyNCAzMjguMiA0Mi45IDE0Ny41Yy00LjctNC43LTEyLjMtNC43LTE3IDBMNi4xIDE2Ny4zYy00LjcgNC43LTQuNyAxMi4zIDAgMTdsMjA5LjQgMjA5LjRjNC43IDQuNyAxMi4zIDQuNyAxNyAwbDIwOS40LTIwOS40YzQuNy00LjcgNC43LTEyLjMgMC0xN3oiPjwvcGF0aD48L3N2Zz4=),var(--input-text-color)}.oper-select--secondary:focus{box-shadow:0 0 0 5px var(--color-secondary-alpha25);color:var(--input-text-color)}.ng-select-oper.ng-dropdown-panel,.ng-dropdown-panel.ng-select.ng-select-oper--primary,.ng-select.ng-select-oper .ng-dropdown-panel,.ng-select.ng-select-oper--primary .ng-dropdown-panel,.ng-dropdown-panel.ng-select-oper--primary{background:white;border:var(--input-border, 1px solid rgba(0, 0, 0, .25));width:auto!important;transition:opacity .1s linear}.ng-select-oper.ng-dropdown-panel.ng-select-top,.ng-select.ng-select-oper .ng-dropdown-panel.ng-select-top,.ng-select.ng-select-oper--primary .ng-dropdown-panel.ng-select-top,.ng-dropdown-panel.ng-select-top.ng-select-oper--primary,.ng-select-oper.ng-dropdown-panel.ng-select-top .ng-option:first-child,.ng-select.ng-select-oper .ng-dropdown-panel.ng-select-top .ng-option:first-child,.ng-select.ng-select-oper--primary .ng-dropdown-panel.ng-select-top .ng-option:first-child,.ng-dropdown-panel.ng-select-top.ng-select-oper--primary .ng-option:first-child{border-top-right-radius:.5rem;border-top-left-radius:.5rem}.ng-select-oper.ng-dropdown-panel.ng-select-bottom,.ng-select.ng-select-oper .ng-dropdown-panel.ng-select-bottom,.ng-select.ng-select-oper--primary .ng-dropdown-panel.ng-select-bottom,.ng-dropdown-panel.ng-select-bottom.ng-select-oper--primary{border-bottom-right-radius:.5rem;border-bottom-left-radius:.5rem}.ng-select-oper.ng-dropdown-panel.ng-select-bottom .ng-option:last-child,.ng-select.ng-select-oper .ng-dropdown-panel.ng-select-bottom .ng-option:last-child,.ng-select.ng-select-oper--primary .ng-dropdown-panel.ng-select-bottom .ng-option:last-child,.ng-dropdown-panel.ng-select-bottom.ng-select-oper--primary .ng-option:last-child{border-bottom-right-radius:.5rem;border-bottom-left-radius:.5rem}.ng-select-oper.ng-dropdown-panel .ng-dropdown-panel-items .ng-option,.ng-select.ng-select-oper .ng-dropdown-panel .ng-dropdown-panel-items .ng-option,.ng-select.ng-select-oper--primary .ng-dropdown-panel .ng-dropdown-panel-items .ng-option,.ng-dropdown-panel.ng-select-oper--primary .ng-dropdown-panel-items .ng-option,.ng-select-oper.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-disabled,.ng-select.ng-select-oper .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-disabled,.ng-select.ng-select-oper--primary .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-disabled,.ng-dropdown-panel.ng-select-oper--primary .ng-dropdown-panel-items .ng-option.ng-option-disabled{background:var(--input-background)}.ng-select-oper.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-marked,.ng-select.ng-select-oper .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-marked,.ng-select.ng-select-oper--primary .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-marked,.ng-dropdown-panel.ng-select-oper--primary .ng-dropdown-panel-items .ng-option.ng-option-marked{background:var(--input-background-marked)}.ng-select-oper.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected,.ng-select.ng-select-oper .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected,.ng-select.ng-select-oper--primary .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected,.ng-dropdown-panel.ng-select-oper--primary .ng-dropdown-panel-items .ng-option.ng-option-selected{background:var(--input-background)}.ng-select-oper.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected.ng-option-marked,.ng-select.ng-select-oper .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected.ng-option-marked,.ng-select.ng-select-oper--primary .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected.ng-option-marked,.ng-dropdown-panel.ng-select-oper--primary .ng-dropdown-panel-items .ng-option.ng-option-selected.ng-option-marked{background:var(--input-background-marked)}.ng-select-oper--primary.ng-dropdown-panel,.ng-select.ng-select-oper--primary .ng-dropdown-panel,.ng-select.ng-select-oper .ng-select-oper--primary.ng-dropdown-panel{background:var(--input-background);border:var(--input-border);transition:opacity .1s linear}.ng-select-oper--primary.ng-dropdown-panel .ng-dropdown-panel-items .ng-option,.ng-select.ng-select-oper--primary .ng-dropdown-panel .ng-dropdown-panel-items .ng-option{color:var(--input-text-color);background:var(--input-background)}.ng-select-oper--primary.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-disabled,.ng-select.ng-select-oper--primary .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-disabled{background:var(--input-background)}.ng-select-oper--primary.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-marked,.ng-select.ng-select-oper--primary .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-marked{background:var(--input-background-marked)}.ng-select-oper--primary.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected,.ng-select.ng-select-oper--primary .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected{background:var(--input-background)}.ng-select-oper--primary.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected.ng-option-marked,.ng-select.ng-select-oper--primary .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected.ng-option-marked{background:var(--input-background-marked)}.ng-select.ng-select-oper .ng-clear-wrapper,.ng-select.ng-select-oper--primary .ng-clear-wrapper{width:initial}.ng-select.ng-select-oper.ng-select-focused:not(.ng-select-opened) .ng-select-container,.ng-select.ng-select-focused.ng-select-oper--primary:not(.ng-select-opened) .ng-select-container,.ng-select.ng-select-oper--primary .ng-select.ng-select-focused.ng-dropdown-panel:not(.ng-select-opened) .ng-select-container,.ng-select.ng-select-oper .ng-select.ng-select-focused.ng-dropdown-panel:not(.ng-select-opened) .ng-select-container{box-shadow:0 0 0 5px #f6f6f6;border:var(--input-border);outline:none}.ng-select.ng-select-oper.ng-select-opened>.ng-select-container,.ng-select.ng-select-opened.ng-select-oper--primary>.ng-select-container,.ng-select.ng-select-oper--primary .ng-select.ng-select-opened.ng-dropdown-panel>.ng-select-container,.ng-select.ng-select-oper--primary .ng-select.ng-select-oper--primary .ng-select.ng-select-opened.ng-dropdown-panel>.ng-select-container,.ng-select.ng-select-oper--primary .ng-select.ng-dropdown-panel .ng-select.ng-select-opened.ng-dropdown-panel>.ng-select-container,.ng-select.ng-select-oper--primary .ng-select.ng-dropdown-panel .ng-select.ng-dropdown-panel .ng-select.ng-select-opened.ng-dropdown-panel>.ng-select-container,.ng-select.ng-select-oper .ng-select.ng-select-opened.ng-dropdown-panel>.ng-select-container,.ng-select.ng-select-oper--primary .ng-select.ng-dropdown-panel .ng-select.ng-dropdown-panel .ng-select.ng-dropdown-panel .ng-select.ng-select-opened.ng-dropdown-panel>.ng-select-container{color:var(--input-text-color);background:var(--input-background)}.ng-select.ng-select-oper.ng-select-single .ng-select-container,.ng-select.ng-select-single.ng-select-oper--primary .ng-select-container,.ng-select.ng-select-oper--primary .ng-select.ng-select-single.ng-dropdown-panel .ng-select-container,.ng-select.ng-select-oper .ng-select.ng-select-single.ng-dropdown-panel .ng-select-container{height:2.5rem}.ng-select.ng-select-oper .ng-select-container,.ng-select.ng-select-oper--primary .ng-select-container{font-size:15px;font-family:Helvetica Neue,sans-serif;font-weight:700;color:var(--input-text-color);max-width:100%;box-sizing:border-box;border:var(--input-border, 1px solid rgba(0, 0, 0, .25));border-radius:var(--input-border-radius);background:var(--input-background)}.ng-select.ng-select-oper .ng-select-container .ng-value-container .ng-input,.ng-select.ng-select-oper--primary .ng-select-container .ng-value-container .ng-input{line-height:1.5rem}.ng-select.ng-select-oper .ng-select-container .ng-value-container .ng-placeholder,.ng-select.ng-select-oper--primary .ng-select-container .ng-value-container .ng-placeholder{color:var(--input-text-color)}.ng-select.ng-select-oper.ng-select-focused:not(.ng-select-opened) .ng-select-container,.ng-select.ng-select-focused.ng-select-oper--primary:not(.ng-select-opened) .ng-select-container,.ng-select.ng-select-oper--primary .ng-select.ng-select-focused.ng-dropdown-panel:not(.ng-select-opened) .ng-select-container,.ng-select.ng-select-oper .ng-select.ng-select-focused.ng-dropdown-panel:not(.ng-select-opened) .ng-select-container{border-color:var(--color-primary);border-width:1px;box-shadow:0 0 0 5px var(--color-primary-alpha25)}.ng-select.ng-select-oper .ng-dropdown-panel,.ng-select.ng-select-oper--primary .ng-dropdown-panel{width:100%!important}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{background:var(--input-background)}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.left{border-right:1px solid #ccc}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon:hover{background:var(--input-background)}.ng-select.ng-select-oper--primary.ng-select-opened>.ng-select-container,.ng-select.ng-select-oper--primary .ng-select.ng-select-opened.ng-dropdown-panel>.ng-select-container{color:var(--input-text-color);background:var(--input-background)}.ng-select.ng-select-oper--primary.ng-select-disabled .ng-select-container,.ng-select.ng-select-oper--primary .ng-select.ng-select-disabled.ng-dropdown-panel .ng-select-container{background:var(--input-background)}.ng-select.ng-select-oper--primary .ng-select-container{color:var(--input-text-color);background:var(--input-background)}.ng-select.ng-select-oper--primary .ng-select-container .ng-value-container .ng-input{line-height:1.5rem}.ng-select.ng-select-oper--primary.ng-select-focused:not(.ng-select-opened) .ng-select-container,.ng-select.ng-select-oper--primary .ng-select.ng-select-focused.ng-dropdown-panel:not(.ng-select-opened) .ng-select-container{border:var(--input-border)}.ng-select.ng-select-oper--status.ng-select-opened>.ng-select-container{color:var(--input-text-color);background:var(--input-background)}.ng-select.ng-select-oper--status.ng-select-opened>.ng-select-container .ng-arrow-wrapper{transform:rotate(225deg);-webkit-transform:rotate(225deg);padding-right:5px;padding-bottom:5px}.ng-select.ng-select-oper--status.ng-select-opened>.ng-select-container .ng-arrow-wrapper .ng-arrow{border-color:#00000040;border-style:solid;border-width:0 3px 3px 0px;padding:3px}.ng-select.ng-select-oper--status.ng-select-focused:not(.ng-select-opened)>.ng-select-container{border-color:#00000040;box-shadow:none;outline:none}.ng-select.ng-select-oper--status .ng-select-container{font-size:12.5px;font-family:Helvetica Neue,sans-serif;font-weight:700;background:var(--input-background);max-width:100%;box-sizing:border-box;border:1px solid rgba(0,0,0,.25);border-radius:1rem}.ng-select.ng-select-oper--status .ng-select-container .ng-value-container .ng-input{line-height:1.5rem}.ng-select.ng-select-oper--status .ng-select-container .ng-value{color:var(--input-text-color);text-align:center;width:100%}.ng-select.ng-select-oper--status .ng-select-container .ng-value-container .ng-placeholder{color:var(--input-text-color);text-align:center}.ng-select.ng-select-oper--status.ng-select-single .ng-select-container{height:2rem}.ng-select.ng-select-oper--status .ng-dropdown-panel{width:100%!important;box-shadow:0 20px 20px #0000000d}.ng-select.ng-select-oper--status .ng-dropdown-panel .ng-dropdown-panel-items{overflow-y:overlay;border-radius:0 0 .5rem .5rem}.ng-select.ng-select-oper--status .ng-dropdown-panel .ng-dropdown-panel-items::-webkit-scrollbar{width:3px;height:5px}.ng-select.ng-select-oper--status .ng-dropdown-panel .ng-dropdown-panel-items::-webkit-scrollbar-thumb{background:rgba(0,0,0,.2);border-radius:.5rem}.ng-select.ng-select-oper--status .ng-dropdown-panel .ng-dropdown-panel-items::-webkit-scrollbar-track{background:transparent}.ng-select.ng-select-oper--status .ng-dropdown-panel .ng-dropdown-panel-items.ng-option{text-align:center;border-bottom:1px solid rgba(0,0,0,.25);border-radius:none}.ng-select.ng-select-oper--status .ng-dropdown-panel .ng-dropdown-panel-items.ng-option.ng-option-disabled{background:var(--input-background)}.ng-select.ng-select-oper--status .ng-dropdown-panel .ng-dropdown-panel-items.ng-option.ng-option-marked{background:var(--input-background-marked)}.ng-select.ng-select-oper--status .ng-dropdown-panel .ng-dropdown-panel-items.ng-option.ng-option-selected{background:var(--input-background)}.ng-select.ng-select-oper--status .ng-dropdown-panel .ng-dropdown-panel-items.ng-option.ng-option-selected.ng-option-marked{background:var(--input-background-marked)}.ng-select.ng-select-oper--status .ng-dropdown-panel .ng-dropdown-panel-items.ng-option:last-of-type{border-bottom:0}.ng-select.ng-select-oper--status .ng-dropdown-panel.ng-select-top,.ng-select.ng-select-oper--status .ng-dropdown-panel.ng-select-top .ng-option:first-child{border-radius:0}.ng-select.ng-select-oper--status .ng-dropdown-panel.ng-select-top .ng-option{text-align:center;border-bottom:1px solid rgba(0,0,0,.25);border-radius:none}.ng-select.ng-select-oper--status .ng-dropdown-panel.ng-select-top .ng-option.ng-option-disabled{background:var(--input-background)}.ng-select.ng-select-oper--status .ng-dropdown-panel.ng-select-top .ng-option.ng-option-marked{background:var(--input-background-marked)}.ng-select.ng-select-oper--status .ng-dropdown-panel.ng-select-top .ng-option.ng-option-selected{background:var(--input-background)}.ng-select.ng-select-oper--status .ng-dropdown-panel.ng-select-top .ng-option.ng-option-selected.ng-option-marked{background:var(--input-background-marked)}.ng-select.ng-select-oper--status .ng-dropdown-panel.ng-select-top .ng-option .ng-option:last-of-type{border-bottom:0}.ng-select.ng-select-oper--status .ng-dropdown-panel.ng-select-bottom{border-radius:0 0 .5rem .5rem}.ng-select.ng-select-oper--status .ng-dropdown-panel.ng-select-bottom .ng-option:last-child{border-radius:0}.ng-select.ng-select-oper--status .ng-dropdown-panel.ng-select-bottom .ng-option{border-bottom:1px solid rgba(0,0,0,.25);border-radius:none}.ng-select.ng-select-oper--status .ng-dropdown-panel.ng-select-bottom .ng-option.ng-option-disabled{background:var(--input-background)}.ng-select.ng-select-oper--status .ng-dropdown-panel.ng-select-bottom .ng-option.ng-option-marked{background:var(--input-background-marked)}.ng-select.ng-select-oper--status .ng-dropdown-panel.ng-select-bottom .ng-option.ng-option-selected{background:var(--input-background)}.ng-select.ng-select-oper--status .ng-dropdown-panel.ng-select-bottom .ng-option.ng-option-selected.ng-option-marked{background:var(--input-background-marked)}.ng-select.ng-select-oper--status .ng-dropdown-panel.ng-select-bottom .ng-option:last-of-type{border-bottom:0}.ng-select.ng-select-oper--status .ng-arrow-wrapper{transform:rotate(45deg);-webkit-transform:rotate(45deg)}.ng-select.ng-select-oper--status .ng-arrow-wrapper .ng-arrow{border-color:#00000040;border-style:solid;border-width:0 3px 3px 0px;padding:3px}.status-option{display:flex;align-items:center;flex-direction:row}.status-option .text{display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:12.5px}.status-option .dot{margin-right:.5rem;height:.375rem;min-height:.375rem;width:.375rem;min-width:.375rem;background-color:#ccc;border-radius:50%;display:inline-block}.ng-touched.ng-invalid.ng-select.ng-select-oper .ng-select-container,.ng-touched.ng-invalid.ng-select.ng-select-oper--primary .ng-select-container,.ng-select.ng-select-oper .ng-touched.ng-invalid.ng-select.ng-dropdown-panel .ng-select-container,.ng-select.ng-select-oper--primary .ng-touched.ng-invalid.ng-select.ng-dropdown-panel .ng-select-container,.ng-invalid.ng-touched.select{border:var(--input-border);box-shadow:0 0 0 5px #cc000040}\n'],
                    encapsulation: 2
                }), c
            })();
            var At = y(2999);

            function Zt(c, g) {
                if (1 & c && a._UZ(0, "fa-icon", 4), 2 & c) {
                    const o = a.oxw();
                    a.Q6J("icon", o.iconActive)
                }
            }

            function Ft(c, g) {
                if (1 & c && a._UZ(0, "fa-icon", 4), 2 & c) {
                    const o = a.oxw();
                    a.Q6J("icon", o.iconActive)
                }
            }
            let zt = (() => {
                class c extends At.k {
                    constructor() {
                        super(...arguments), this.iconActive = v.f8k
                    }
                }
                return c.\u0275fac = function() {
                    let g;
                    return function(l) {
                        return (g || (g = a.n5z(c)))(l || c)
                    }
                }(), c.\u0275cmp = a.Xpm({
                    type: c,
                    selectors: [
                        ["oper-client-button-switch"]
                    ],
                    features: [a._Bn([{
                        provide: p.JU,
                        multi: !0,
                        useExisting: (0, a.Gpc)(() => c)
                    }]), a.qOj],
                    decls: 10,
                    vars: 13,
                    consts: [
                        [1, "switch-wrap"],
                        [3, "click", "blur"],
                        ["class", "icon", 3, "icon", 4, "ngIf"],
                        ["type", "checkbox", 3, "ngModel", "ngModelChange", "blur"],
                        [1, "icon", 3, "icon"]
                    ],
                    template: function(o, l) {
                        1 & o && (a.TgZ(0, "div", 0)(1, "button", 1), a.NdJ("click", function() {
                            return l.onChange(l.valueA)
                        })("blur", function() {
                            return l._onTouched()
                        }), a._uU(2), a.ALo(3, "translate"), a.YNc(4, Zt, 1, 1, "fa-icon", 2), a.qZA(), a.TgZ(5, "input", 3), a.NdJ("ngModelChange", function(h) {
                            return l.ngModelValue = h
                        })("blur", function() {
                            return l._onTouched()
                        }), a.qZA(), a.TgZ(6, "button", 1), a.NdJ("click", function() {
                            return l.onChange(l.valueB)
                        })("blur", function() {
                            return l._onTouched()
                        }), a._uU(7), a.ALo(8, "translate"), a.YNc(9, Ft, 1, 1, "fa-icon", 2), a.qZA()()), 2 & o && (a.xp6(1), a.ekj("active", l.value === l.valueA), a.xp6(1), a.hij(" ", a.lcZ(3, 9, l.labelA), " "), a.xp6(2), a.Q6J("ngIf", l.value === l.valueA), a.xp6(1), a.Q6J("ngModel", l.ngModelValue), a.xp6(1), a.ekj("active", l.value === l.valueB), a.xp6(1), a.hij(" ", a.lcZ(8, 11, l.labelB), " "), a.xp6(2), a.Q6J("ngIf", l.value === l.valueB))
                    },
                    directives: [D.O5, Q.BN, p.Wl, p.JJ, p.On],
                    pipes: [I.X$],
                    styles: ["@charset \"UTF-8\";.oper-button[_ngcontent-%COMP%], .switch-wrap[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .oper-button--transparentBorder[_ngcontent-%COMP%], .oper-button--danger[_ngcontent-%COMP%], .oper-button--icon[_ngcontent-%COMP%], .oper-button--transparent[_ngcontent-%COMP%], .oper-button--transparentDanger[_ngcontent-%COMP%], .oper-button--secondary[_ngcontent-%COMP%], .oper-button--primary[_ngcontent-%COMP%]{-webkit-appearance:none;appearance:none;outline:none;cursor:pointer;background:transparent;border:none;font-family:Helvetica Neue,sans-serif;font-weight:400;padding:0;margin:0;font-size:1em;color:inherit;display:inline-block;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;height:2.5rem;max-width:100%;padding:0 1rem;font-weight:700;color:var(--button-text-color);background:var(--button-background);border:var(--button-border);border-radius:var(--button-border-radius)}.oper-button[_ngcontent-%COMP%]:not([disabled]):active, .switch-wrap[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not([disabled]):active, .oper-button--transparentBorder[_ngcontent-%COMP%]:not([disabled]):active, .oper-button--danger[_ngcontent-%COMP%]:not([disabled]):active, .oper-button--icon[_ngcontent-%COMP%]:not([disabled]):active, .oper-button--transparent[_ngcontent-%COMP%]:not([disabled]):active, .oper-button--transparentDanger[_ngcontent-%COMP%]:not([disabled]):active, .oper-button--secondary[_ngcontent-%COMP%]:not([disabled]):active, .oper-button--primary[_ngcontent-%COMP%]:not([disabled]):active{outline:none}.oper-button[_ngcontent-%COMP%]:not([disabled]):focus, .switch-wrap[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not([disabled]):focus, .oper-button--transparentBorder[_ngcontent-%COMP%]:not([disabled]):focus, .oper-button--danger[_ngcontent-%COMP%]:not([disabled]):focus, .oper-button--icon[_ngcontent-%COMP%]:not([disabled]):focus, .oper-button--transparent[_ngcontent-%COMP%]:not([disabled]):focus, .oper-button--transparentDanger[_ngcontent-%COMP%]:not([disabled]):focus, .oper-button--secondary[_ngcontent-%COMP%]:not([disabled]):focus, .oper-button--primary[_ngcontent-%COMP%]:not([disabled]):focus{outline:none}.oper-button[disabled][_ngcontent-%COMP%], .switch-wrap[_ngcontent-%COMP%]   button[disabled][_ngcontent-%COMP%], [disabled].oper-button--transparentBorder[_ngcontent-%COMP%], [disabled].oper-button--danger[_ngcontent-%COMP%], [disabled].oper-button--icon[_ngcontent-%COMP%], [disabled].oper-button--transparent[_ngcontent-%COMP%], [disabled].oper-button--transparentDanger[_ngcontent-%COMP%], [disabled].oper-button--secondary[_ngcontent-%COMP%], [disabled].oper-button--primary[_ngcontent-%COMP%]{opacity:.66;cursor:default}.oper-button.oper-button--pending[_ngcontent-%COMP%], .switch-wrap[_ngcontent-%COMP%]   button.oper-button--pending[_ngcontent-%COMP%], .oper-button--pending.oper-button--transparentBorder[_ngcontent-%COMP%], .oper-button--pending.oper-button--danger[_ngcontent-%COMP%], .oper-button--pending.oper-button--icon[_ngcontent-%COMP%], .oper-button--pending.oper-button--transparent[_ngcontent-%COMP%], .oper-button--pending.oper-button--transparentDanger[_ngcontent-%COMP%], .oper-button--pending.oper-button--secondary[_ngcontent-%COMP%], .oper-button--pending.oper-button--primary[_ngcontent-%COMP%]{background-image:url(\"data:image/svg+xml;charset=UTF-8,%3csvg version='1.1' id='loader' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='25px' height='25px' viewBox='0 0 60 60' style='enable-background:new 0 0 60 60;' xml:space='preserve'%3e%3cpath fill='%23fff' d='M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z'%3e%3canimateTransform attributeType='xml' attributeName='transform' type='rotate' from='0 25 25' to='360 25 25' dur='0.6s' repeatCount='indefinite'/%3e%3c/path%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:center}.oper-button--primary[_ngcontent-%COMP%]{color:var(--primary-button-text-color);background:var(--primary-button-background-color);border:var(--primary-button-border);border-radius:var(--primary-button-border-radius)}.oper-button--primary[_ngcontent-%COMP%]:not([disabled]):active{color:var(--primary-button-active-text-color);background:var(--primary-button-active-background-color);outline:none}.oper-button--primary[_ngcontent-%COMP%]:not([disabled]):focus{color:var(--primary-button-active-text-color);background:var(--primary-button-active-background-color);outline:none}.oper-button--primary[disabled][_ngcontent-%COMP%]{color:var(--primary-button-disabled-text-color);background:var(--primary-button-disabled-background-color);border:var(--primary-button-disabled-border);cursor:default}.oper-button--secondary[_ngcontent-%COMP%]{color:var(--secondary-button-text-color);border:var(--secondary-button-border);border-radius:var(--secondary-button-border-radius);background:var(--secondary-button-background-color)}.oper-button--secondary[_ngcontent-%COMP%]:not([disabled]):active{color:var(--secondary-button-disabled-text-color);background:var(--secondary-button-active-background-color);outline:none}.oper-button--secondary[_ngcontent-%COMP%]:not([disabled]):focus{color:var(--secondary-button-active-text-color);background:var(--secondary-button-active-background-color);outline:none}.oper-button--secondary[disabled][_ngcontent-%COMP%]{color:var(--secondary-button-disabled-text-color);background:var(--secondary-button-disabled-background-color);border:var(--secondary-button-disabled-border);cursor:default}.oper-button--secondary.oper-button--pending[_ngcontent-%COMP%]{background-image:url(\"data:image/svg+xml;charset=UTF-8,%3csvg version='1.1' id='loader' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='25px' height='25px' viewBox='0 0 60 60' style='enable-background:new 0 0 60 60;' xml:space='preserve'%3e%3cpath fill='%23fff' d='M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z'%3e%3canimateTransform attributeType='xml' attributeName='transform' type='rotate' from='0 25 25' to='360 25 25' dur='0.6s' repeatCount='indefinite'/%3e%3c/path%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:center}.oper-button--transparent[_ngcontent-%COMP%], .oper-button--transparentDanger[_ngcontent-%COMP%]{background:transparent;color:var(--color-text-primary)}.oper-button--transparent[_ngcontent-%COMP%]:not([disabled]):active, .oper-button--transparentDanger[_ngcontent-%COMP%]:not([disabled]):active{background:var(--color-primary-shade75-alpha25)}.oper-button--transparent[_ngcontent-%COMP%]:not([disabled]):focus, .oper-button--transparentDanger[_ngcontent-%COMP%]:not([disabled]):focus{background:transparent;box-shadow:none}.oper-button--icon[_ngcontent-%COMP%]{background:transparent;color:#000;border-radius:99999px;width:36px;padding:0}.oper-button--icon[_ngcontent-%COMP%]:focus{box-shadow:none}.oper-button--danger[_ngcontent-%COMP%]{color:#fff;background:#cc0000}.oper-button--danger[_ngcontent-%COMP%]:not([disabled]):active{color:#fff;background:#990000}.oper-button--transparentDanger[_ngcontent-%COMP%]:not([disabled]):active{color:#fff;background:#990000}.oper-button--transparentBorder[_ngcontent-%COMP%]{background:transparent;border:1px solid #e5e5e5;color:var(--color-link-primary)}.oper-button--transparentBorder[_ngcontent-%COMP%]:not([disabled]):active{background:#cecece}.oper-button--transparentBorder[_ngcontent-%COMP%]:not([disabled]):focus{box-shadow:0 0 0 5px #f6f6f6}.oper-button--transparentBorder[disabled][_ngcontent-%COMP%]{opacity:.66;cursor:default}.switch-wrap[_ngcontent-%COMP%]{display:flex;width:66.6%}.switch-wrap[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]{position:absolute;opacity:0;width:0;height:0}.switch-wrap[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:var(--button-switch-text-color);background:var(--button-switch-background);border:var(--button-switch-border);border-radius:var(--button-switch-border-radius);width:50%}.switch-wrap[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{color:var(--button-switch-active-text-color);background:var(--button-switch-active-background);border:var(--button-switch-active-border)}.switch-wrap[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{margin-left:.25rem}.switch-wrap[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child{border-top-right-radius:0;border-bottom-right-radius:0}.switch-wrap[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child:not(.active){border-right:none}.switch-wrap[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child{border-top-left-radius:0;border-bottom-left-radius:0}.switch-wrap[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child:not(.active){border-left:none}"],
                    changeDetection: 0
                }), c
            })();
            var Wt = y(3890);
            const Rt = ["picker"],
                jt = ["dateInput"];

            function Et(c, g) {
                1 & c && (a.TgZ(0, "sup"), a._uU(1, "*"), a.qZA())
            }

            function Qt(c, g) {
                if (1 & c && (a._UZ(0, "oper-client-tooltip-indicator", 16), a.ALo(1, "translate")), 2 & c) {
                    const o = a.oxw().ngIf;
                    a.oxw(3);
                    const l = a.MAs(1);
                    a.Q6J("text", a.lcZ(1, 2, o))("parentContainer", l)
                }
            }

            function ye(c, g) {
                if (1 & c && (a._UZ(0, "fa-icon", 17), a.ALo(1, "translate")), 2 & c) {
                    const o = a.oxw().ngIf,
                        l = a.oxw(4);
                    a.Q6J("tooltip", a.lcZ(1, 5, o))("tooltip-class", "oper-tooltip")("placement", "right")("fixedWidth", !0)("icon", l.questionIcon)
                }
            }

            function W(c, g) {
                if (1 & c && (a.ynx(0), a.YNc(1, Qt, 2, 4, "oper-client-tooltip-indicator", 14), a.YNc(2, ye, 2, 7, "fa-icon", 15), a.BQk()), 2 & c) {
                    const o = a.oxw(4);
                    a.xp6(1), a.Q6J("ngIf", 0 === o.overlayService.overlayReferences.size), a.xp6(1), a.Q6J("ngIf", o.overlayService.overlayReferences.size > 0)
                }
            }

            function G(c, g) {
                if (1 & c && (a.TgZ(0, "div", 11)(1, "label", 12), a._uU(2), a.ALo(3, "translate"), a.YNc(4, Et, 2, 0, "sup", 13), a.qZA(), a.YNc(5, W, 3, 2, "ng-container", 13), a.ALo(6, "async"), a.qZA()), 2 & c) {
                    const o = a.oxw(3);
                    a.xp6(1), a.uIk("for", o.question.key), a.xp6(1), a.hij(" ", a.lcZ(3, 4, o.question.label), " "), a.xp6(2), a.Q6J("ngIf", o.shouldShowAsterisk()), a.xp6(1), a.Q6J("ngIf", a.lcZ(6, 6, o.question.helpText))
                }
            }
            const ve = function(c) {
                    return {
                        "input-group--disabled": c
                    }
                },
                mt = function(c) {
                    return {
                        "cursor-pointer": c
                    }
                };

            function R(c, g) {
                if (1 & c) {
                    const o = a.EpF();
                    a.TgZ(0, "div", 21), a._UZ(1, "mat-datepicker", 22, 23), a.TgZ(3, "input", 24), a.NdJ("dateChange", function(d) {
                        return a.CHM(o), a.oxw(5).datePickerChanged(d)
                    }), a.qZA(), a.TgZ(4, "input", 25, 26), a.NdJ("ngModelChange", function(d) {
                        return a.CHM(o), a.oxw(5).onTextChange(d)
                    })("blur", function() {
                        return a.CHM(o), a.oxw(5).onBlur()
                    })("focus", function() {
                        return a.CHM(o), a.oxw(5).onFocus()
                    }), a.qZA(), a.TgZ(6, "div", 27), a.NdJ("click", function() {
                        a.CHM(o);
                        const d = a.MAs(2),
                            h = a.oxw(5);
                        return h.isMobile ? h.dateInputClick() : d.open()
                    }), a._UZ(7, "fa-icon", 28), a.qZA()()
                }
                if (2 & c) {
                    const o = a.MAs(2),
                        l = a.oxw(5);
                    a.Q6J("ngClass", a.VKq(15, ve, l.question.disabled)), a.xp6(1), a.Q6J("touchUi", l.isMobile), a.xp6(2), a.Q6J("matDatepicker", o)("min", l.minDate)("max", l.maxDate)("value", l.question.value), a.xp6(1), a.Q6J("id", l.question.key)("name", l.question.label)("required", l.question.required)("formControlName", l.question.key)("min", l.minDate)("max", l.maxDate), a.uIk("disabled", l.question.disabled ? "" : null), a.xp6(2), a.Q6J("ngClass", a.VKq(17, mt, !l.isMobile)), a.xp6(1), a.Q6J("icon", l.faCalendar)
                }
            }

            function Ht(c, g) {
                if (1 & c) {
                    const o = a.EpF();
                    a.TgZ(0, "oper-client-input-password", 29), a.NdJ("focusEmit", function() {
                        return a.CHM(o), a.oxw(5).onFocus()
                    })("blurEmit", function() {
                        return a.CHM(o), a.oxw(5).onBlur()
                    })("valueChange", function(d) {
                        return a.CHM(o), a.oxw(5).onTextChange(d)
                    }), a.qZA()
                }
                if (2 & c) {
                    const o = a.oxw(5);
                    a.Q6J("formControlName", o.question.key)("name", o.question.label)("key", o.question.key)("required", o.question.required)("disableInput", o.question.disabled ? "" : null)("value", o.question.value)
                }
            }

            function Ie(c, g) {
                if (1 & c && (a.TgZ(0, "div", 32), a._uU(1), a.qZA()), 2 & c) {
                    const o = a.oxw(6);
                    a.xp6(1), a.hij(" ", o.question.prefix, " ")
                }
            }

            function V(c, g) {
                if (1 & c) {
                    const o = a.EpF();
                    a.TgZ(0, "div", 21), a.YNc(1, Ie, 2, 1, "div", 30), a.TgZ(2, "input", 31), a.NdJ("ngModelChange", function(d) {
                        return a.CHM(o), a.oxw(5).onTextChange(d)
                    })("blur", function() {
                        return a.CHM(o), a.oxw(5).onBlur()
                    })("focus", function() {
                        return a.CHM(o), a.oxw(5).onFocus()
                    }), a.qZA()()
                }
                if (2 & c) {
                    const o = a.oxw(5);
                    a.Q6J("ngClass", a.VKq(12, ve, o.question.disabled)), a.xp6(1), a.Q6J("ngIf", o.question.prefix), a.xp6(1), a.Q6J("type", o.question.type)("id", o.question.key)("name", o.question.label)("required", o.question.required)("formControlName", o.question.key)("min", o.question.min)("max", o.question.max)("maxlength", o.question.maxlength), a.uIk("inputmode", o.question.type)("disabled", o.question.disabled ? "" : null)
                }
            }

            function k(c, g) {
                if (1 & c && (a.TgZ(0, "span", 33), a._uU(1), a.ALo(2, "translate"), a.qZA()), 2 & c) {
                    const o = a.oxw(5);
                    a.xp6(1), a.hij(" ", a.lcZ(2, 1, o.question.additionalDisclaimer), " ")
                }
            }
            const ue = function(c, g, o) {
                return {
                    "input-group-addition--active": c,
                    "input-group-addition--inactive": g,
                    "--clickable": o
                }
            };

            function Ye(c, g) {
                if (1 & c) {
                    const o = a.EpF();
                    a.TgZ(0, "div", 27), a.NdJ("click", function() {
                        return a.CHM(o), a.oxw(6).question.onAdditionalFlagClicked()
                    }), a.ALo(1, "async"), a.ALo(2, "async"), a.ALo(3, "async"), a._UZ(4, "fa-icon", 28), a.qZA()
                }
                if (2 & c) {
                    const o = a.oxw(6);
                    a.Q6J("ngClass", a.kEZ(8, ue, a.lcZ(1, 2, o.question.additionalFlagValue), !1 === a.lcZ(2, 4, o.question.additionalFlagValue), a.lcZ(3, 6, o.question.additionalFlagClickable))), a.xp6(4), a.Q6J("icon", o.question.additionalFlagIcon)
                }
            }

            function pt(c, g) {
                if (1 & c) {
                    const o = a.EpF();
                    a.TgZ(0, "div", 21)(1, "div", 32)(2, "div", 34), a._uU(3), a.qZA()(), a.TgZ(4, "input", 35), a.NdJ("ngModelChange", function(d) {
                        return a.CHM(o), a.oxw(5).onTextChange(d)
                    })("blur", function() {
                        return a.CHM(o), a.oxw(5).onBlur()
                    })("focus", function() {
                        return a.CHM(o), a.oxw(5).onFocus()
                    })("keydown", function() {
                        return a.CHM(o), a.oxw(5).onKeydown()
                    }), a.ALo(5, "async"), a.qZA(), a.YNc(6, Ye, 5, 12, "div", 36), a.ALo(7, "async"), a.ALo(8, "async"), a.qZA()
                }
                if (2 & c) {
                    const o = a.oxw(5);
                    a.Q6J("ngClass", a.VKq(19, ve, o.question.disabled)), a.xp6(3), a.hij(" ", o.environmentCurrencySymbol, " "), a.xp6(1), a.Q6J("type", "text")("id", o.question.key)("name", o.question.label)("required", o.question.required)("formControlName", o.question.key)("min", o.question.min)("max", o.question.max)("autocomplete", "off")("options", a.lcZ(5, 13, o.currencyInputOptions$)), a.uIk("disabled", o.question.disabled ? "" : null), a.xp6(2), a.Q6J("ngIf", o.question.additionalFlagIcon && (!0 === a.lcZ(7, 15, o.question.additionalFlagValue) || !1 === a.lcZ(8, 17, o.question.additionalFlagValue)))
                }
            }

            function qt(c, g) {
                if (1 & c && (a.ynx(0), a.YNc(1, R, 8, 19, "div", 18), a.YNc(2, Ht, 1, 6, "oper-client-input-password", 19), a.TgZ(3, "div"), a.YNc(4, V, 3, 14, "div", 18), a.YNc(5, k, 3, 3, "span", 20), a.qZA(), a.YNc(6, pt, 9, 21, "div", 18), a.BQk()), 2 & c) {
                    const o = a.oxw(4);
                    a.xp6(1), a.Q6J("ngIf", "date" === o.question.type), a.xp6(1), a.Q6J("ngIf", "password" === o.question.type), a.xp6(1), a.ekj("input-group-container", o.question.additionalDisclaimer), a.xp6(1), a.Q6J("ngIf", "date" !== o.question.type && !o.question.currency && "password" !== o.question.type), a.xp6(1), a.Q6J("ngIf", o.question.additionalDisclaimer), a.xp6(1), a.Q6J("ngIf", o.question.currency)
                }
            }

            function Jt(c, g) {
                if (1 & c) {
                    const o = a.EpF();
                    a.ynx(0), a.TgZ(1, "textarea", 37), a.NdJ("blur", function() {
                        return a.CHM(o), a.oxw(4).onBlur()
                    })("focus", function() {
                        return a.CHM(o), a.oxw(4).onFocus()
                    })("ngModelChange", function(d) {
                        return a.CHM(o), a.oxw(4).onTextChange(d)
                    }), a._uU(2, "\t\t\t\t\t\t"), a.qZA(), a.BQk()
                }
                if (2 & c) {
                    const o = a.oxw(4);
                    a.xp6(1), a.Q6J("id", o.question.key)("formControlName", o.question.key)("required", o.question.required), a.uIk("disabled", o.question.disabled ? "" : null)
                }
            }

            function ut(c, g) {
                if (1 & c && (a.ynx(0), a.YNc(1, qt, 7, 7, "ng-container", 13), a.YNc(2, Jt, 3, 4, "ng-container", 13), a.BQk()), 2 & c) {
                    const o = a.oxw(3);
                    a.xp6(1), a.Q6J("ngIf", !o.question.multiline), a.xp6(1), a.Q6J("ngIf", o.question.multiline)
                }
            }

            function J(c, g) {
                if (1 & c && (a.ynx(0), a.YNc(1, G, 7, 8, "div", 10), a.YNc(2, ut, 3, 2, "ng-container", 7), a.BQk()), 2 & c) {
                    const o = a.oxw(2);
                    a.xp6(1), a.Q6J("ngIf", !!o.question.label), a.xp6(1), a.Q6J("ngSwitchCase", "field")
                }
            }

            function gt(c, g) {
                if (1 & c) {
                    const o = a.EpF();
                    a.TgZ(0, "div", 38)(1, "label", 39), a.NdJ("click", function(d) {
                        return a.CHM(o), a.oxw(2).onLabelLinkClick(d)
                    })("click", function(d) {
                        return a.CHM(o), a.oxw(2).onLabelClick(d)
                    }), a.ALo(2, "translate"), a.qZA(), a.TgZ(3, "input", 40), a.NdJ("change", function(d) {
                        return a.CHM(o), a.oxw(2).onTextChange(d)
                    }), a.qZA()()
                }
                if (2 & c) {
                    const o = a.oxw(2);
                    a.xp6(1), a.s9C("for", o.question.key), a.Q6J("innerHTML", a.lcZ(2, 10, o.question.label), a.oJD), a.xp6(2), a.Q6J("type", o.question.type)("id", o.question.key)("name", o.question.label)("required", o.question.required)("value", o.question.value)("checked", o.question.value)("formControlName", o.question.key), a.uIk("disabled", o.question.disabled ? "" : null)
                }
            }

            function $e(c, g) {
                if (1 & c) {
                    const o = a.EpF();
                    a.ynx(0), a.TgZ(1, "oper-client-select", 41), a.NdJ("selectedValueChange", function() {
                        return a.CHM(o), a.oxw(2).onSelectionChange()
                    }), a.ALo(2, "translate"), a.qZA(), a.BQk()
                }
                if (2 & c) {
                    const o = a.oxw(2);
                    a.xp6(1), a.Q6J("options", o.question.options)("placeholder", a.lcZ(2, 8, o.question.defaultLabel))("formControlName", o.question.key)("disabled", o.question.disabled)("alreadySorted", o.question.alreadySorted)("clearable", !1 === o.question.required)("multiple", o.question.multiple)("appendTo", o.question.appendTo)
                }
            }

            function Pe(c, g) {
                if (1 & c) {
                    const o = a.EpF();
                    a.TgZ(0, "oper-client-button-switch", 44), a.NdJ("valueChanged", function() {
                        return a.CHM(o), a.oxw(3).onSwitchChange()
                    }), a.qZA()
                }
                if (2 & c) {
                    const o = a.oxw(3);
                    a.Q6J("formId", o.formId)("type", o.question.type)("formControlName", o.question.key)("labelA", o.question.labelA)("labelB", o.question.labelB)("valueA", o.question.valueA)("valueB", o.question.valueB)("value", o.question.value)
                }
            }

            function P(c, g) {
                if (1 & c) {
                    const o = a.EpF();
                    a.TgZ(0, "oper-client-toggle-switch", 44), a.NdJ("valueChanged", function() {
                        return a.CHM(o), a.oxw(3).onSwitchChange()
                    }), a.qZA()
                }
                if (2 & c) {
                    const o = a.oxw(3);
                    a.Q6J("formId", o.formId)("type", o.question.type)("formControlName", o.question.key)("labelA", o.question.labelA)("labelB", o.question.labelB)("valueA", o.question.valueA)("valueB", o.question.valueB)("value", o.question.value)
                }
            }

            function bt(c, g) {
                if (1 & c && (a._UZ(0, "oper-client-tooltip-indicator", 16), a.ALo(1, "translate"), a.ALo(2, "async")), 2 & c) {
                    a.oxw(3);
                    const o = a.MAs(1),
                        l = a.oxw();
                    a.Q6J("text", a.lcZ(1, 2, a.lcZ(2, 4, l.question.helpText)))("parentContainer", o)
                }
            }

            function ft(c, g) {
                if (1 & c && (a._UZ(0, "fa-icon", 17), a.ALo(1, "translate"), a.ALo(2, "async")), 2 & c) {
                    const o = a.oxw(4);
                    a.Q6J("tooltip", a.lcZ(1, 5, a.lcZ(2, 7, o.question.helpText)))("tooltip-class", "oper-tooltip")("placement", "right")("fixedWidth", !0)("icon", o.questionIcon)
                }
            }

            function Le(c, g) {
                if (1 & c && (a.ynx(0), a.YNc(1, bt, 3, 6, "oper-client-tooltip-indicator", 14), a.YNc(2, ft, 3, 9, "fa-icon", 15), a.BQk()), 2 & c) {
                    const o = a.oxw(3);
                    a.xp6(1), a.Q6J("ngIf", 0 === o.overlayService.overlayReferences.size), a.xp6(1), a.Q6J("ngIf", o.overlayService.overlayReferences.size > 0)
                }
            }

            function Xe(c, g) {
                if (1 & c && (a.ynx(0), a.YNc(1, Pe, 1, 8, "oper-client-button-switch", 42), a.TgZ(2, "div", 43), a.YNc(3, P, 1, 8, "oper-client-toggle-switch", 42), a.YNc(4, Le, 3, 2, "ng-container", 13), a.ALo(5, "async"), a.qZA(), a.BQk()), 2 & c) {
                    const o = a.oxw(2);
                    a.xp6(1), a.Q6J("ngIf", "button" === o.question.type), a.xp6(2), a.Q6J("ngIf", "toggle" === o.question.type), a.xp6(1), a.Q6J("ngIf", !o.question.label && a.lcZ(5, 3, o.question.helpText))
                }
            }

            function Ae(c, g) {
                if (1 & c && a._UZ(0, "fa-icon", 48), 2 & c) {
                    const o = a.oxw().ngIf,
                        l = a.oxw(2);
                    a.Q6J("tooltip", o)("tooltip-class", "oper-tooltip")("trigger", "click")("placement", "bottom")("fixedWidth", !0)("icon", l.errorIcon)
                }
            }

            function ge(c, g) {
                if (1 & c && (a.ynx(0), a.TgZ(1, "label", 45, 46), a._uU(3), a.qZA(), a.YNc(4, Ae, 1, 6, "fa-icon", 47), a.BQk()), 2 & c) {
                    const o = g.ngIf,
                        l = a.MAs(2);
                    a.xp6(3), a.Oqu(o), a.xp6(1), a.Q6J("ngIf", l.offsetWidth < l.scrollWidth)
                }
            }

            function Ze(c, g) {
                1 & c && (a.TgZ(0, "label", 45), a._uU(1), a.qZA()), 2 & c && (a.xp6(1), a.Oqu("\xa0"))
            }

            function Bt(c, g) {
                if (1 & c && (a.TgZ(0, "div", 1, 2)(2, "div", 3), a.ynx(3, 4), a.YNc(4, J, 3, 2, "ng-container", 5), a.YNc(5, gt, 4, 12, "ng-template", null, 6, a.W1O), a.YNc(7, $e, 3, 10, "ng-container", 7), a.YNc(8, Xe, 6, 5, "ng-container", 7), a.BQk(), a.qZA(), a.TgZ(9, "div", 8), a.YNc(10, ge, 5, 2, "ng-container", 5), a.ALo(11, "translate"), a.ALo(12, "translate"), a.ALo(13, "async"), a.YNc(14, Ze, 2, 1, "ng-template", null, 9, a.W1O), a.qZA()()), 2 & c) {
                    const o = a.MAs(6),
                        l = a.MAs(15),
                        d = a.oxw();
                    let h;
                    a.Q6J("formGroup", d.form), a.xp6(2), a.Tol(null !== (h = d.question.questionClass) && void 0 !== h ? h : ""), a.ekj("form-item--inlined", "inline" === d.question.labelPlacement || "checkbox" === d.question.type || "toggle" === d.question.type)("form-item--checkbox", "checkbox" === d.question.type), a.xp6(1), a.Q6J("ngSwitch", d.question.controlType), a.xp6(1), a.Q6J("ngIf", "checkbox" !== d.question.type)("ngIfElse", o), a.xp6(3), a.Q6J("ngSwitchCase", "select"), a.xp6(1), a.Q6J("ngSwitchCase", "switch"), a.xp6(1), a.ekj("form-item-error--checkbox", "inline" === d.question.labelPlacement || "checkbox" === d.question.type), a.xp6(1), a.Q6J("ngIf", (null == d.form || null == d.form.controls[d.question.key] ? null : d.form.controls[d.question.key].invalid) && (null == d.form || null == d.form.controls[d.question.key] ? null : d.form.controls[d.question.key].touched) && !d.isFocused && a.lcZ(11, 16, d.errorMessage) || a.lcZ(12, 18, a.lcZ(13, 20, d.question.warningText)))("ngIfElse", l)
                }
            }
            const Fe = {
                button: !1,
                date: !0,
                time: !0,
                email: !0,
                number: !0,
                password: !0,
                radio: !0,
                text: !0,
                tel: !0
            };
            let Ut = (() => {
                class c {
                    constructor(o, l, d, h) {
                        this.validatorService = o, this.environmentCurrencyService = l, this.deviceService = d, this.overlayService = h, this.destroy$ = new z.xQ, this.valueChange = new a.vpe, this.labelLinkClick = new a.vpe, this.currencyInputMode = E.fF.FINANCIAL, this.errorIcon = Te.RLE, this.questionIcon = Te.Fuz, this.faCalendar = v.fT7, this.isMobile = this.deviceService.isMobile(), this.environmentCurrencySymbol = this.environmentCurrencyService.getSymbol(), this.valueChange$ = new z.xQ, this.currencyInputOptions$ = this.environmentCurrencyService.defaultCurrencyInputOptions$.pipe((0, N.R)(this.destroy$), (0, Se.U)(q => ({
                            min: this.question.min,
                            max: this.question.max,
                            ...q
                        })))
                    }
                    get errorMessage() {
                        return this.form?.controls[this.question.key]?.errors && this.validatorService.formatValidationErrors(this.form?.controls[this.question.key]?.errors, this.question)[0]
                    }
                    static formatDate(o, l = "yyyy-MM-DD") {
                        return Nt(o).format(l)
                    }
                    ngOnInit() {
                        this.setDateRange(), this.valueChangedDebounce(), this.form?.valueChanges.pipe((0, N.R)(this.destroy$), (0, lt.h)(o => !!this.question?.updateValidityOnFormValueChanges), (0, _e.b)(() => {
                            this.form.controls[this.question.key].markAsTouched()
                        })).subscribe()
                    }
                    ngOnDestroy() {
                        this.destroy$.next(), this.destroy$.complete()
                    }
                    dateInputClick() {
                        this.dateInput?.nativeElement.click(), this.dateInput?.nativeElement.focus()
                    }
                    onBlur() {
                        this.isFocused = !1
                    }
                    onFocus() {
                        this.isFocused = !0
                    }
                    getType() {
                        return "date" === this.question.type ? "text" : this.question.type
                    }
                    onTextChange(o) {
                        const d = this.question;
                        let h = o;
                        "checkbox" === d.type && (h = o.target.checked), (d.transform || d.multiline || "checkbox" === d.type) && this.form.controls[this.question.key]?.setValue(d.transform ? d.transform(h) : h, {
                            emitEvent: !1,
                            emitViewToModelChange: !1
                        }), this.valueChange$.next()
                    }
                    onSelectionChange() {
                        this.valueChange$.next()
                    }
                    onSwitchChange() {
                        this.valueChange$.next()
                    }
                    onLabelLinkClick(o) {
                        o.target.classList.contains("link") && this.labelLinkClick.emit()
                    }
                    onLabelClick(o) {
                        this.question.onLabelClick && !o.target?.classList?.contains("link") && this.question.onLabelClick()
                    }
                    datePickerChanged(o) {
                        const l = o?.value && c.formatDate(o.value) || null;
                        this.form?.controls[this.question.key]?.value !== l && (this.form?.controls[this.question.key]?.setValue(l), this.valueChange$.next())
                    }
                    onKeydown() {
                        this.keydownDebounceExtension && this.valueChange$.next()
                    }
                    getValidity() {
                        return this.form.controls[this.question.key].valid
                    }
                    shouldShowAsterisk() {
                        return typeof this.question.type > "u" ? this.question?.required : this.question?.required && Fe[this.question.type]
                    }
                    setDateRange() {
                        "date" === this.question.type && (this.minDate = this.question?.min && c.formatDate(this.question.min) || null, this.maxDate = this.question?.max && c.formatDate(this.question.max) || null)
                    }
                    valueChangedDebounce() {
                        this.valueChange$.pipe((0, qe.b)(this.debounceTime || 0), (0, _e.b)(() => {
                            this.valueChange.emit()
                        }), (0, N.R)(this.destroy$)).subscribe()
                    }
                }
                return c.\u0275fac = function(o) {
                    return new(o || c)(a.Y36(T.o), a.Y36(He.Yq), a.Y36(me.x0), a.Y36($.F))
                }, c.\u0275cmp = a.Xpm({
                    type: c,
                    selectors: [
                        ["oper-client-dynamic-form-question"]
                    ],
                    viewQuery: function(o, l) {
                        if (1 & o && (a.Gf(Rt, 5), a.Gf(jt, 5)), 2 & o) {
                            let d;
                            a.iGM(d = a.CRH()) && (l.datePicker = d.first), a.iGM(d = a.CRH()) && (l.dateInput = d.first)
                        }
                    },
                    inputs: {
                        formId: "formId",
                        question: "question",
                        numberOfQuestions: "numberOfQuestions",
                        form: "form",
                        markAsTouched: "markAsTouched",
                        debounceTime: "debounceTime",
                        keydownDebounceExtension: "keydownDebounceExtension"
                    },
                    outputs: {
                        valueChange: "valueChange",
                        labelLinkClick: "labelLinkClick"
                    },
                    decls: 1,
                    vars: 1,
                    consts: [
                        [3, "formGroup", 4, "ngIf"],
                        [3, "formGroup"],
                        ["questionContainer", ""],
                        [1, "form-item"],
                        [3, "ngSwitch"],
                        [4, "ngIf", "ngIfElse"],
                        ["checkboxInputTpl", ""],
                        [4, "ngSwitchCase"],
                        [1, "form-item-error"],
                        ["nope", ""],
                        ["class", "label", 4, "ngIf"],
                        [1, "label"],
                        [1, "form-item-label"],
                        [4, "ngIf"],
                        [3, "text", "parentContainer", 4, "ngIf"],
                        ["class", "help-text-icon", 3, "tooltip", "tooltip-class", "placement", "fixedWidth", "icon", 4, "ngIf"],
                        [3, "text", "parentContainer"],
                        [1, "help-text-icon", 3, "tooltip", "tooltip-class", "placement", "fixedWidth", "icon"],
                        ["class", "input-group", 3, "ngClass", 4, "ngIf"],
                        [3, "formControlName", "name", "key", "required", "disableInput", "value", "focusEmit", "blurEmit", "valueChange", 4, "ngIf"],
                        ["class", "additional-dislaimer", 4, "ngIf"],
                        [1, "input-group", 3, "ngClass"],
                        [3, "touchUi"],
                        ["picker", ""],
                        ["type", "date", "tabindex", "-1", 1, "hiddenInput", 3, "matDatepicker", "min", "max", "value", "dateChange"],
                        ["type", "date", 1, "input-group__form-item-input", 3, "id", "name", "required", "formControlName", "min", "max", "ngModelChange", "blur", "focus"],
                        ["dateInput", ""],
                        [1, "input-group-addition", "input-group-addition--append", 3, "ngClass", "click"],
                        [3, "icon"],
                        [3, "formControlName", "name", "key", "required", "disableInput", "value", "focusEmit", "blurEmit", "valueChange"],
                        ["class", "input-group-addition input-group-addition--prepend", 4, "ngIf"],
                        [1, "input-group__form-item-input", 3, "type", "id", "name", "required", "formControlName", "min", "max", "maxlength", "ngModelChange", "blur", "focus"],
                        [1, "input-group-addition", "input-group-addition--prepend"],
                        [1, "additional-dislaimer"],
                        [1, "currency-symbol"],
                        ["currencyMask", "", "inputmode", "decimal", 1, "input-group__form-item-input", 3, "type", "id", "name", "required", "formControlName", "min", "max", "autocomplete", "options", "ngModelChange", "blur", "focus", "keydown"],
                        ["class", "input-group-addition input-group-addition--append", 3, "ngClass", "click", 4, "ngIf"],
                        ["min", "0", "rows", "4", 1, "form-item-textarea", 3, "id", "formControlName", "required", "blur", "focus", "ngModelChange"],
                        [1, "checkbox-container"],
                        [1, "form-item-label", "cursor-pointer", "checkbox-container--shrink", 3, "for", "innerHTML", "click"],
                        [1, "checkbox", "cursor-pointer", 3, "type", "id", "name", "required", "value", "checked", "formControlName", "change"],
                        ["data-test", "select--modalInformations", 3, "options", "placeholder", "formControlName", "disabled", "alreadySorted", "clearable", "multiple", "appendTo", "selectedValueChange"],
                        [3, "formId", "type", "formControlName", "labelA", "labelB", "valueA", "valueB", "value", "valueChanged", 4, "ngIf"],
                        [1, "toggle-container"],
                        [3, "formId", "type", "formControlName", "labelA", "labelB", "valueA", "valueB", "value", "valueChanged"],
                        [1, "form-item-error__label"],
                        ["error", ""],
                        ["class", "form-item-error__icon", 3, "tooltip", "tooltip-class", "trigger", "placement", "fixedWidth", "icon", 4, "ngIf"],
                        [1, "form-item-error__icon", 3, "tooltip", "tooltip-class", "trigger", "placement", "fixedWidth", "icon"]
                    ],
                    template: function(o, l) {
                        1 & o && a.YNc(0, Bt, 16, 22, "div", 0), 2 & o && a.Q6J("ngIf", l.form.controls[l.question.key] && "hidden" !== l.question.type)
                    },
                    directives: [D.O5, p.JL, p.sg, D.RF, st.E, Q.BN, ct.i9, D.n9, D.mk, Je.Mq, Je.hl, p.Fj, p.Q7, p.JJ, p.u, ee, p.nD, E.g1, Lt, zt, Wt.Z],
                    pipes: [I.X$, D.Ov],
                    styles: ["@charset \"UTF-8\";.mat-badge-content{font-weight:600;font-size:12px;font-family:Roboto,Helvetica Neue,sans-serif}.mat-badge-small .mat-badge-content{font-size:9px}.mat-badge-large .mat-badge-content{font-size:24px}.mat-h1,.mat-headline,.mat-typography .mat-h1,.mat-typography .mat-headline,.mat-typography h1{font:400 24px/32px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0 0 16px}.mat-h2,.mat-title,.mat-typography .mat-h2,.mat-typography .mat-title,.mat-typography h2{font:500 20px/32px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0 0 16px}.mat-h3,.mat-subheading-2,.mat-typography .mat-h3,.mat-typography .mat-subheading-2,.mat-typography h3{font:400 16px/28px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0 0 16px}.mat-h4,.mat-subheading-1,.mat-typography .mat-h4,.mat-typography .mat-subheading-1,.mat-typography h4{font:400 15px/24px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0 0 16px}.mat-h5,.mat-typography .mat-h5,.mat-typography h5{font:400 11.62px/20px Roboto,Helvetica Neue,sans-serif;margin:0 0 12px}.mat-h6,.mat-typography .mat-h6,.mat-typography h6{font:400 9.38px/20px Roboto,Helvetica Neue,sans-serif;margin:0 0 12px}.mat-body-strong,.mat-body-2,.mat-typography .mat-body-strong,.mat-typography .mat-body-2{font:500 14px/24px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-body,.mat-body-1,.mat-typography .mat-body,.mat-typography .mat-body-1,.mat-typography{font:400 14px/20px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-body p,.mat-body-1 p,.mat-typography .mat-body p,.mat-typography .mat-body-1 p,.mat-typography p{margin:0 0 12px}.mat-small,.mat-caption,.mat-typography .mat-small,.mat-typography .mat-caption{font:400 12px/20px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-display-4,.mat-typography .mat-display-4{font:300 112px/112px Roboto,Helvetica Neue,sans-serif;letter-spacing:-.05em;margin:0 0 56px}.mat-display-3,.mat-typography .mat-display-3{font:400 56px/56px Roboto,Helvetica Neue,sans-serif;letter-spacing:-.02em;margin:0 0 64px}.mat-display-2,.mat-typography .mat-display-2{font:400 45px/48px Roboto,Helvetica Neue,sans-serif;letter-spacing:-.005em;margin:0 0 64px}.mat-display-1,.mat-typography .mat-display-1{font:400 34px/40px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0 0 64px}.mat-bottom-sheet-container{font:400 14px/20px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-button,.mat-raised-button,.mat-icon-button,.mat-stroked-button,.mat-flat-button,.mat-fab,.mat-mini-fab{font-family:Roboto,Helvetica Neue,sans-serif;font-size:14px;font-weight:500}.mat-button-toggle,.mat-card{font-family:Roboto,Helvetica Neue,sans-serif}.mat-card-title{font-size:24px;font-weight:500}.mat-card-header .mat-card-title{font-size:20px}.mat-card-subtitle,.mat-card-content{font-size:14px}.mat-checkbox{font-family:Roboto,Helvetica Neue,sans-serif}.mat-checkbox-layout .mat-checkbox-label{line-height:24px}.mat-chip{font-size:14px;font-weight:500}.mat-chip .mat-chip-trailing-icon.mat-icon,.mat-chip .mat-chip-remove.mat-icon{font-size:18px}.mat-table{font-family:Roboto,Helvetica Neue,sans-serif}.mat-header-cell{font-size:12px;font-weight:500}.mat-cell,.mat-footer-cell{font-size:14px}.mat-calendar{font-family:Roboto,Helvetica Neue,sans-serif}.mat-calendar-body{font-size:13px}.mat-calendar-body-label,.mat-calendar-period-button{font-size:14px;font-weight:500}.mat-calendar-table-header th{font-size:11px;font-weight:400}.mat-dialog-title{font:500 20px/32px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-expansion-panel-header{font-family:Roboto,Helvetica Neue,sans-serif;font-size:15px;font-weight:400}.mat-expansion-panel-content{font:400 14px/20px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-form-field{font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-form-field-wrapper{padding-bottom:1.34375em}.mat-form-field-prefix .mat-icon,.mat-form-field-suffix .mat-icon{font-size:150%;line-height:1.125}.mat-form-field-prefix .mat-icon-button,.mat-form-field-suffix .mat-icon-button{height:1.5em;width:1.5em}.mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-suffix .mat-icon-button .mat-icon{height:1.125em;line-height:1.125}.mat-form-field-infix{padding:.5em 0;border-top:.84375em solid transparent}.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.34375em) scale(.75);width:133.3333333333%}.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.34374em) scale(.75);width:133.3333433333%}.mat-form-field-label-wrapper{top:-.84375em;padding-top:.84375em}.mat-form-field-label{top:1.34375em}.mat-form-field-underline{bottom:1.34375em}.mat-form-field-subscript-wrapper{font-size:75%;margin-top:.6666666667em;top:calc(100% - 1.7916666667em)}.mat-form-field-appearance-legacy .mat-form-field-wrapper{padding-bottom:1.25em}.mat-form-field-appearance-legacy .mat-form-field-infix{padding:.4375em 0}.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.001px);width:133.3333333333%}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00101px);width:133.3333433333%}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00102px);width:133.3333533333%}.mat-form-field-appearance-legacy .mat-form-field-label{top:1.28125em}.mat-form-field-appearance-legacy .mat-form-field-underline{bottom:1.25em}.mat-form-field-appearance-legacy .mat-form-field-subscript-wrapper{margin-top:.5416666667em;top:calc(100% - 1.6666666667em)}@media print{.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.28122em) scale(.75)}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.28121em) scale(.75)}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.2812em) scale(.75)}}.mat-form-field-appearance-fill .mat-form-field-infix{padding:.25em 0 .75em}.mat-form-field-appearance-fill .mat-form-field-label{top:1.09375em;margin-top:-.5em}.mat-form-field-appearance-fill.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-.59375em) scale(.75);width:133.3333333333%}.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-.59374em) scale(.75);width:133.3333433333%}.mat-form-field-appearance-outline .mat-form-field-infix{padding:1em 0}.mat-form-field-appearance-outline .mat-form-field-label{top:1.84375em;margin-top:-.25em}.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.59375em) scale(.75);width:133.3333333333%}.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.59374em) scale(.75);width:133.3333433333%}.mat-grid-tile-header,.mat-grid-tile-footer{font-size:14px}.mat-grid-tile-header .mat-line,.mat-grid-tile-footer .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-header .mat-line:nth-child(n+2),.mat-grid-tile-footer .mat-line:nth-child(n+2){font-size:12px}input.mat-input-element{margin-top:-.0625em}.mat-menu-item{font-family:Roboto,Helvetica Neue,sans-serif;font-size:14px;font-weight:400}.mat-paginator,.mat-paginator-page-size .mat-select-trigger{font-family:Roboto,Helvetica Neue,sans-serif;font-size:12px}.mat-radio-button,.mat-select{font-family:Roboto,Helvetica Neue,sans-serif}.mat-select-trigger{height:1.125em}.mat-slide-toggle-content{font-family:Roboto,Helvetica Neue,sans-serif}.mat-slider-thumb-label-text{font-family:Roboto,Helvetica Neue,sans-serif;font-size:12px;font-weight:500}.mat-stepper-vertical,.mat-stepper-horizontal{font-family:Roboto,Helvetica Neue,sans-serif}.mat-step-label{font-size:14px;font-weight:400}.mat-step-sub-label-error{font-weight:400}.mat-step-label-error{font-size:14px}.mat-step-label-selected{font-size:14px;font-weight:500}.mat-tab-group{font-family:Roboto,Helvetica Neue,sans-serif}.mat-tab-label,.mat-tab-link{font-family:Roboto,Helvetica Neue,sans-serif;font-size:14px;font-weight:500}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font:500 20px/32px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0}.mat-tooltip{font-family:Roboto,Helvetica Neue,sans-serif;font-size:10px;padding-top:6px;padding-bottom:6px}.mat-tooltip-handset{font-size:14px;padding-top:8px;padding-bottom:8px}.mat-list-item,.mat-list-option{font-family:Roboto,Helvetica Neue,sans-serif}.mat-list-base .mat-list-item{font-size:16px}.mat-list-base .mat-list-item .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base .mat-list-item .mat-line:nth-child(n+2){font-size:14px}.mat-list-base .mat-list-option{font-size:16px}.mat-list-base .mat-list-option .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base .mat-list-option .mat-line:nth-child(n+2){font-size:14px}.mat-list-base .mat-subheader{font-family:Roboto,Helvetica Neue,sans-serif;font-size:14px;font-weight:500}.mat-list-base[dense] .mat-list-item{font-size:12px}.mat-list-base[dense] .mat-list-item .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base[dense] .mat-list-item .mat-line:nth-child(n+2){font-size:12px}.mat-list-base[dense] .mat-list-option{font-size:12px}.mat-list-base[dense] .mat-list-option .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base[dense] .mat-list-option .mat-line:nth-child(n+2){font-size:12px}.mat-list-base[dense] .mat-subheader{font-family:Roboto,Helvetica Neue,sans-serif;font-size:12px;font-weight:500}.mat-option{font-family:Roboto,Helvetica Neue,sans-serif;font-size:16px}.mat-optgroup-label{font:500 14px/24px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-simple-snackbar{font-family:Roboto,Helvetica Neue,sans-serif;font-size:14px}.mat-simple-snackbar-action{line-height:1;font-family:inherit;font-size:inherit;font-weight:500}.mat-tree{font-family:Roboto,Helvetica Neue,sans-serif}.mat-tree-node,.mat-nested-tree-node{font-weight:400;font-size:14px}.mat-ripple{overflow:hidden;position:relative}.mat-ripple:not(:empty){transform:translateZ(0)}.mat-ripple.mat-ripple-unbounded{overflow:visible}.mat-ripple-element{position:absolute;border-radius:50%;pointer-events:none;transition:opacity,transform 0ms cubic-bezier(0,0,.2,1);transform:scale(0)}.cdk-high-contrast-active .mat-ripple-element{display:none}.cdk-visually-hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap;outline:0;-webkit-appearance:none;-moz-appearance:none}.cdk-overlay-container,.cdk-global-overlay-wrapper{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed;z-index:1000}.cdk-overlay-container:empty{display:none}.cdk-global-overlay-wrapper{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000;display:flex;max-width:100%;max-height:100%}.cdk-overlay-backdrop{position:absolute;inset:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:transparent;transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:1}.cdk-high-contrast-active .cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:.6}.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.32)}.cdk-overlay-transparent-backdrop{transition:visibility 1ms linear,opacity 1ms linear;visibility:hidden;opacity:1}.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing{opacity:0;visibility:visible}.cdk-overlay-connected-position-bounding-box{position:absolute;z-index:1000;display:flex;flex-direction:column;min-width:1px;min-height:1px}.cdk-global-scrollblock{position:fixed;width:100%;overflow-y:scroll}textarea.cdk-textarea-autosize{resize:none}textarea.cdk-textarea-autosize-measuring{padding:2px 0!important;box-sizing:content-box!important;height:auto!important;overflow:hidden!important}textarea.cdk-textarea-autosize-measuring-firefox{padding:2px 0!important;box-sizing:content-box!important;height:0!important}@keyframes cdk-text-field-autofill-start{}@keyframes cdk-text-field-autofill-end{}.cdk-text-field-autofill-monitored:-webkit-autofill{animation:cdk-text-field-autofill-start 0s 1ms}.cdk-text-field-autofill-monitored:not(:-webkit-autofill){animation:cdk-text-field-autofill-end 0s 1ms}.mat-focus-indicator,.mat-mdc-focus-indicator{position:relative}.mat-ripple-element{background-color:#0000001a}.mat-option{color:#000000de}.mat-option:hover:not(.mat-option-disabled),.mat-option:focus:not(.mat-option-disabled){background:rgba(0,0,0,.04)}.mat-option.mat-selected:not(.mat-option-multiple):not(.mat-option-disabled){background:rgba(0,0,0,.04)}.mat-option.mat-active{background:rgba(0,0,0,.04);color:#000000de}.mat-option.mat-option-disabled{color:#00000061}.mat-primary .mat-option.mat-selected:not(.mat-option-disabled){color:#3f51b5}.mat-accent .mat-option.mat-selected:not(.mat-option-disabled){color:#ff4081}.mat-warn .mat-option.mat-selected:not(.mat-option-disabled){color:#f44336}.mat-optgroup-label{color:#0000008a}.mat-optgroup-disabled .mat-optgroup-label{color:#00000061}.mat-pseudo-checkbox{color:#0000008a}.mat-pseudo-checkbox:after{color:#fafafa}.mat-pseudo-checkbox-disabled{color:#b0b0b0}.mat-primary .mat-pseudo-checkbox-checked,.mat-primary .mat-pseudo-checkbox-indeterminate{background:#3f51b5}.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox-indeterminate,.mat-accent .mat-pseudo-checkbox-checked,.mat-accent .mat-pseudo-checkbox-indeterminate{background:#ff4081}.mat-warn .mat-pseudo-checkbox-checked,.mat-warn .mat-pseudo-checkbox-indeterminate{background:#f44336}.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled{background:#b0b0b0}.mat-app-background{background-color:#fafafa;color:#000000de}.mat-elevation-z0{box-shadow:0 0 #0003,0 0 #00000024,0 0 #0000001f}.mat-elevation-z1{box-shadow:0 2px 1px -1px #0003,0 1px 1px #00000024,0 1px 3px #0000001f}.mat-elevation-z2{box-shadow:0 3px 1px -2px #0003,0 2px 2px #00000024,0 1px 5px #0000001f}.mat-elevation-z3{box-shadow:0 3px 3px -2px #0003,0 3px 4px #00000024,0 1px 8px #0000001f}.mat-elevation-z4{box-shadow:0 2px 4px -1px #0003,0 4px 5px #00000024,0 1px 10px #0000001f}.mat-elevation-z5{box-shadow:0 3px 5px -1px #0003,0 5px 8px #00000024,0 1px 14px #0000001f}.mat-elevation-z6{box-shadow:0 3px 5px -1px #0003,0 6px 10px #00000024,0 1px 18px #0000001f}.mat-elevation-z7{box-shadow:0 4px 5px -2px #0003,0 7px 10px 1px #00000024,0 2px 16px 1px #0000001f}.mat-elevation-z8{box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.mat-elevation-z9{box-shadow:0 5px 6px -3px #0003,0 9px 12px 1px #00000024,0 3px 16px 2px #0000001f}.mat-elevation-z10{box-shadow:0 6px 6px -3px #0003,0 10px 14px 1px #00000024,0 4px 18px 3px #0000001f}.mat-elevation-z11{box-shadow:0 6px 7px -4px #0003,0 11px 15px 1px #00000024,0 4px 20px 3px #0000001f}.mat-elevation-z12{box-shadow:0 7px 8px -4px #0003,0 12px 17px 2px #00000024,0 5px 22px 4px #0000001f}.mat-elevation-z13{box-shadow:0 7px 8px -4px #0003,0 13px 19px 2px #00000024,0 5px 24px 4px #0000001f}.mat-elevation-z14{box-shadow:0 7px 9px -4px #0003,0 14px 21px 2px #00000024,0 5px 26px 4px #0000001f}.mat-elevation-z15{box-shadow:0 8px 9px -5px #0003,0 15px 22px 2px #00000024,0 6px 28px 5px #0000001f}.mat-elevation-z16{box-shadow:0 8px 10px -5px #0003,0 16px 24px 2px #00000024,0 6px 30px 5px #0000001f}.mat-elevation-z17{box-shadow:0 8px 11px -5px #0003,0 17px 26px 2px #00000024,0 6px 32px 5px #0000001f}.mat-elevation-z18{box-shadow:0 9px 11px -5px #0003,0 18px 28px 2px #00000024,0 7px 34px 6px #0000001f}.mat-elevation-z19{box-shadow:0 9px 12px -6px #0003,0 19px 29px 2px #00000024,0 7px 36px 6px #0000001f}.mat-elevation-z20{box-shadow:0 10px 13px -6px #0003,0 20px 31px 3px #00000024,0 8px 38px 7px #0000001f}.mat-elevation-z21{box-shadow:0 10px 13px -6px #0003,0 21px 33px 3px #00000024,0 8px 40px 7px #0000001f}.mat-elevation-z22{box-shadow:0 10px 14px -6px #0003,0 22px 35px 3px #00000024,0 8px 42px 7px #0000001f}.mat-elevation-z23{box-shadow:0 11px 14px -7px #0003,0 23px 36px 3px #00000024,0 9px 44px 8px #0000001f}.mat-elevation-z24{box-shadow:0 11px 15px -7px #0003,0 24px 38px 3px #00000024,0 9px 46px 8px #0000001f}.mat-theme-loaded-marker{display:none}.mat-autocomplete-panel{background:#fff;color:#000000de}.mat-autocomplete-panel:not([class*=mat-elevation-z]){box-shadow:0 2px 4px -1px #0003,0 4px 5px #00000024,0 1px 10px #0000001f}.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover){background:#fff}.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover):not(.mat-option-disabled){color:#000000de}.mat-badge{position:relative}.mat-badge.mat-badge{overflow:visible}.mat-badge-hidden .mat-badge-content{display:none}.mat-badge-content{position:absolute;text-align:center;display:inline-block;border-radius:50%;transition:transform .2s ease-in-out;transform:scale(.6);overflow:hidden;white-space:nowrap;text-overflow:ellipsis;pointer-events:none}.ng-animate-disabled .mat-badge-content,.mat-badge-content._mat-animation-noopable{transition:none}.mat-badge-content.mat-badge-active{transform:none}.mat-badge-small .mat-badge-content{width:16px;height:16px;line-height:16px}.mat-badge-small.mat-badge-above .mat-badge-content{top:-8px}.mat-badge-small.mat-badge-below .mat-badge-content{bottom:-8px}.mat-badge-small.mat-badge-before .mat-badge-content{left:-16px}[dir=rtl] .mat-badge-small.mat-badge-before .mat-badge-content{left:auto;right:-16px}.mat-badge-small.mat-badge-after .mat-badge-content{right:-16px}[dir=rtl] .mat-badge-small.mat-badge-after .mat-badge-content{right:auto;left:-16px}.mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-8px}[dir=rtl] .mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-8px}.mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-8px}[dir=rtl] .mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-8px}.mat-badge-medium .mat-badge-content{width:22px;height:22px;line-height:22px}.mat-badge-medium.mat-badge-above .mat-badge-content{top:-11px}.mat-badge-medium.mat-badge-below .mat-badge-content{bottom:-11px}.mat-badge-medium.mat-badge-before .mat-badge-content{left:-22px}[dir=rtl] .mat-badge-medium.mat-badge-before .mat-badge-content{left:auto;right:-22px}.mat-badge-medium.mat-badge-after .mat-badge-content{right:-22px}[dir=rtl] .mat-badge-medium.mat-badge-after .mat-badge-content{right:auto;left:-22px}.mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-11px}[dir=rtl] .mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-11px}.mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-11px}[dir=rtl] .mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-11px}.mat-badge-large .mat-badge-content{width:28px;height:28px;line-height:28px}.mat-badge-large.mat-badge-above .mat-badge-content{top:-14px}.mat-badge-large.mat-badge-below .mat-badge-content{bottom:-14px}.mat-badge-large.mat-badge-before .mat-badge-content{left:-28px}[dir=rtl] .mat-badge-large.mat-badge-before .mat-badge-content{left:auto;right:-28px}.mat-badge-large.mat-badge-after .mat-badge-content{right:-28px}[dir=rtl] .mat-badge-large.mat-badge-after .mat-badge-content{right:auto;left:-28px}.mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-14px}[dir=rtl] .mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-14px}.mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-14px}[dir=rtl] .mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-14px}.mat-badge-content{color:#fff;background:#3f51b5}.cdk-high-contrast-active .mat-badge-content{outline:solid 1px;border-radius:0}.mat-badge-accent .mat-badge-content{background:#ff4081;color:#fff}.mat-badge-warn .mat-badge-content{color:#fff;background:#f44336}.mat-badge-disabled .mat-badge-content{background:#b9b9b9;color:#00000061}.mat-bottom-sheet-container{box-shadow:0 8px 10px -5px #0003,0 16px 24px 2px #00000024,0 6px 30px 5px #0000001f;background:#fff;color:#000000de}.mat-button,.mat-icon-button,.mat-stroked-button{color:inherit;background:transparent}.mat-button.mat-primary,.mat-icon-button.mat-primary,.mat-stroked-button.mat-primary{color:#3f51b5}.mat-button.mat-accent,.mat-icon-button.mat-accent,.mat-stroked-button.mat-accent{color:#ff4081}.mat-button.mat-warn,.mat-icon-button.mat-warn,.mat-stroked-button.mat-warn{color:#f44336}.mat-button.mat-primary.mat-button-disabled,.mat-button.mat-accent.mat-button-disabled,.mat-button.mat-warn.mat-button-disabled,.mat-button.mat-button-disabled.mat-button-disabled,.mat-icon-button.mat-primary.mat-button-disabled,.mat-icon-button.mat-accent.mat-button-disabled,.mat-icon-button.mat-warn.mat-button-disabled,.mat-icon-button.mat-button-disabled.mat-button-disabled,.mat-stroked-button.mat-primary.mat-button-disabled,.mat-stroked-button.mat-accent.mat-button-disabled,.mat-stroked-button.mat-warn.mat-button-disabled,.mat-stroked-button.mat-button-disabled.mat-button-disabled{color:#00000042}.mat-button.mat-primary .mat-button-focus-overlay,.mat-icon-button.mat-primary .mat-button-focus-overlay,.mat-stroked-button.mat-primary .mat-button-focus-overlay{background-color:#3f51b5}.mat-button.mat-accent .mat-button-focus-overlay,.mat-icon-button.mat-accent .mat-button-focus-overlay,.mat-stroked-button.mat-accent .mat-button-focus-overlay{background-color:#ff4081}.mat-button.mat-warn .mat-button-focus-overlay,.mat-icon-button.mat-warn .mat-button-focus-overlay,.mat-stroked-button.mat-warn .mat-button-focus-overlay{background-color:#f44336}.mat-button.mat-button-disabled .mat-button-focus-overlay,.mat-icon-button.mat-button-disabled .mat-button-focus-overlay,.mat-stroked-button.mat-button-disabled .mat-button-focus-overlay{background-color:transparent}.mat-button .mat-ripple-element,.mat-icon-button .mat-ripple-element,.mat-stroked-button .mat-ripple-element{opacity:.1;background-color:currentColor}.mat-button-focus-overlay{background:#000}.mat-stroked-button:not(.mat-button-disabled){border-color:#0000001f}.mat-flat-button,.mat-raised-button,.mat-fab,.mat-mini-fab{color:#000000de;background-color:#fff}.mat-flat-button.mat-primary,.mat-raised-button.mat-primary,.mat-fab.mat-primary,.mat-mini-fab.mat-primary,.mat-flat-button.mat-accent,.mat-raised-button.mat-accent,.mat-fab.mat-accent,.mat-mini-fab.mat-accent,.mat-flat-button.mat-warn,.mat-raised-button.mat-warn,.mat-fab.mat-warn,.mat-mini-fab.mat-warn{color:#fff}.mat-flat-button.mat-primary.mat-button-disabled,.mat-flat-button.mat-accent.mat-button-disabled,.mat-flat-button.mat-warn.mat-button-disabled,.mat-flat-button.mat-button-disabled.mat-button-disabled,.mat-raised-button.mat-primary.mat-button-disabled,.mat-raised-button.mat-accent.mat-button-disabled,.mat-raised-button.mat-warn.mat-button-disabled,.mat-raised-button.mat-button-disabled.mat-button-disabled,.mat-fab.mat-primary.mat-button-disabled,.mat-fab.mat-accent.mat-button-disabled,.mat-fab.mat-warn.mat-button-disabled,.mat-fab.mat-button-disabled.mat-button-disabled,.mat-mini-fab.mat-primary.mat-button-disabled,.mat-mini-fab.mat-accent.mat-button-disabled,.mat-mini-fab.mat-warn.mat-button-disabled,.mat-mini-fab.mat-button-disabled.mat-button-disabled{color:#00000042}.mat-flat-button.mat-primary,.mat-raised-button.mat-primary,.mat-fab.mat-primary,.mat-mini-fab.mat-primary{background-color:#3f51b5}.mat-flat-button.mat-accent,.mat-raised-button.mat-accent,.mat-fab.mat-accent,.mat-mini-fab.mat-accent{background-color:#ff4081}.mat-flat-button.mat-warn,.mat-raised-button.mat-warn,.mat-fab.mat-warn,.mat-mini-fab.mat-warn{background-color:#f44336}.mat-flat-button.mat-primary.mat-button-disabled,.mat-flat-button.mat-accent.mat-button-disabled,.mat-flat-button.mat-warn.mat-button-disabled,.mat-flat-button.mat-button-disabled.mat-button-disabled,.mat-raised-button.mat-primary.mat-button-disabled,.mat-raised-button.mat-accent.mat-button-disabled,.mat-raised-button.mat-warn.mat-button-disabled,.mat-raised-button.mat-button-disabled.mat-button-disabled,.mat-fab.mat-primary.mat-button-disabled,.mat-fab.mat-accent.mat-button-disabled,.mat-fab.mat-warn.mat-button-disabled,.mat-fab.mat-button-disabled.mat-button-disabled,.mat-mini-fab.mat-primary.mat-button-disabled,.mat-mini-fab.mat-accent.mat-button-disabled,.mat-mini-fab.mat-warn.mat-button-disabled,.mat-mini-fab.mat-button-disabled.mat-button-disabled{background-color:#0000001f}.mat-flat-button.mat-primary .mat-ripple-element,.mat-raised-button.mat-primary .mat-ripple-element,.mat-fab.mat-primary .mat-ripple-element,.mat-mini-fab.mat-primary .mat-ripple-element,.mat-flat-button.mat-accent .mat-ripple-element,.mat-raised-button.mat-accent .mat-ripple-element,.mat-fab.mat-accent .mat-ripple-element,.mat-mini-fab.mat-accent .mat-ripple-element,.mat-flat-button.mat-warn .mat-ripple-element,.mat-raised-button.mat-warn .mat-ripple-element,.mat-fab.mat-warn .mat-ripple-element,.mat-mini-fab.mat-warn .mat-ripple-element{background-color:#ffffff1a}.mat-stroked-button:not([class*=mat-elevation-z]),.mat-flat-button:not([class*=mat-elevation-z]){box-shadow:0 0 #0003,0 0 #00000024,0 0 #0000001f}.mat-raised-button:not([class*=mat-elevation-z]){box-shadow:0 3px 1px -2px #0003,0 2px 2px #00000024,0 1px 5px #0000001f}.mat-raised-button:not(.mat-button-disabled):active:not([class*=mat-elevation-z]){box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.mat-raised-button.mat-button-disabled:not([class*=mat-elevation-z]){box-shadow:0 0 #0003,0 0 #00000024,0 0 #0000001f}.mat-fab:not([class*=mat-elevation-z]),.mat-mini-fab:not([class*=mat-elevation-z]){box-shadow:0 3px 5px -1px #0003,0 6px 10px #00000024,0 1px 18px #0000001f}.mat-fab:not(.mat-button-disabled):active:not([class*=mat-elevation-z]),.mat-mini-fab:not(.mat-button-disabled):active:not([class*=mat-elevation-z]){box-shadow:0 7px 8px -4px #0003,0 12px 17px 2px #00000024,0 5px 22px 4px #0000001f}.mat-fab.mat-button-disabled:not([class*=mat-elevation-z]),.mat-mini-fab.mat-button-disabled:not([class*=mat-elevation-z]){box-shadow:0 0 #0003,0 0 #00000024,0 0 #0000001f}.mat-button-toggle-standalone:not([class*=mat-elevation-z]),.mat-button-toggle-group:not([class*=mat-elevation-z]){box-shadow:0 3px 1px -2px #0003,0 2px 2px #00000024,0 1px 5px #0000001f}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]){box-shadow:none}.mat-button-toggle{color:#00000061}.mat-button-toggle .mat-button-toggle-focus-overlay{background-color:#0000001f}.mat-button-toggle-appearance-standard{color:#000000de;background:#fff}.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{background-color:#000}.mat-button-toggle-group-appearance-standard .mat-button-toggle+.mat-button-toggle{border-left:solid 1px #e0e0e0}[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle+.mat-button-toggle{border-left:none;border-right:solid 1px #e0e0e0}.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle+.mat-button-toggle{border-left:none;border-right:none;border-top:solid 1px #e0e0e0}.mat-button-toggle-checked{background-color:#e0e0e0;color:#0000008a}.mat-button-toggle-checked.mat-button-toggle-appearance-standard{color:#000000de}.mat-button-toggle-disabled{color:#00000042;background-color:#eee}.mat-button-toggle-disabled.mat-button-toggle-appearance-standard{background:#fff}.mat-button-toggle-disabled.mat-button-toggle-checked{background-color:#bdbdbd}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.mat-button-toggle-group-appearance-standard{border:solid 1px #e0e0e0}.mat-button-toggle-appearance-standard .mat-button-toggle-label-content{line-height:48px}.mat-card{background:#fff;color:#000000de}.mat-card:not([class*=mat-elevation-z]){box-shadow:0 2px 1px -1px #0003,0 1px 1px #00000024,0 1px 3px #0000001f}.mat-card.mat-card-flat:not([class*=mat-elevation-z]){box-shadow:0 0 #0003,0 0 #00000024,0 0 #0000001f}.mat-card-subtitle{color:#0000008a}.mat-checkbox-frame{border-color:#0000008a}.mat-checkbox-checkmark{fill:#fafafa}.mat-checkbox-checkmark-path{stroke:#fafafa!important}.mat-checkbox-mixedmark{background-color:#fafafa}.mat-checkbox-indeterminate.mat-primary .mat-checkbox-background,.mat-checkbox-checked.mat-primary .mat-checkbox-background{background-color:#3f51b5}.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background,.mat-checkbox-checked.mat-accent .mat-checkbox-background{background-color:#ff4081}.mat-checkbox-indeterminate.mat-warn .mat-checkbox-background,.mat-checkbox-checked.mat-warn .mat-checkbox-background{background-color:#f44336}.mat-checkbox-disabled.mat-checkbox-checked .mat-checkbox-background,.mat-checkbox-disabled.mat-checkbox-indeterminate .mat-checkbox-background{background-color:#b0b0b0}.mat-checkbox-disabled:not(.mat-checkbox-checked) .mat-checkbox-frame{border-color:#b0b0b0}.mat-checkbox-disabled .mat-checkbox-label{color:#00000061}.mat-checkbox .mat-ripple-element{background-color:#000}.mat-checkbox-checked:not(.mat-checkbox-disabled).mat-primary .mat-ripple-element,.mat-checkbox:active:not(.mat-checkbox-disabled).mat-primary .mat-ripple-element{background:#3f51b5}.mat-checkbox-checked:not(.mat-checkbox-disabled).mat-accent .mat-ripple-element,.mat-checkbox:active:not(.mat-checkbox-disabled).mat-accent .mat-ripple-element{background:#ff4081}.mat-checkbox-checked:not(.mat-checkbox-disabled).mat-warn .mat-ripple-element,.mat-checkbox:active:not(.mat-checkbox-disabled).mat-warn .mat-ripple-element{background:#f44336}.mat-chip.mat-standard-chip{background-color:#e0e0e0;color:#000000de}.mat-chip.mat-standard-chip .mat-chip-remove{color:#000000de;opacity:.4}.mat-chip.mat-standard-chip:not(.mat-chip-disabled):active{box-shadow:0 3px 3px -2px #0003,0 3px 4px #00000024,0 1px 8px #0000001f}.mat-chip.mat-standard-chip:not(.mat-chip-disabled) .mat-chip-remove:hover{opacity:.54}.mat-chip.mat-standard-chip.mat-chip-disabled{opacity:.4}.mat-chip.mat-standard-chip:after{background:#000}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary{background-color:#3f51b5;color:#fff}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-chip-remove{color:#fff;opacity:.4}.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-ripple-element{background-color:#ffffff1a}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn{background-color:#f44336;color:#fff}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-chip-remove{color:#fff;opacity:.4}.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-ripple-element{background-color:#ffffff1a}.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent{background-color:#ff4081;color:#fff}.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-chip-remove{color:#fff;opacity:.4}.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-ripple-element{background-color:#ffffff1a}.mat-table{background:#fff}.mat-table thead,.mat-table tbody,.mat-table tfoot,mat-header-row,mat-row,mat-footer-row,[mat-header-row],[mat-row],[mat-footer-row],.mat-table-sticky{background:inherit}mat-row,mat-header-row,mat-footer-row,th.mat-header-cell,td.mat-cell,td.mat-footer-cell{border-bottom-color:#0000001f}.mat-header-cell{color:#0000008a}.mat-cell,.mat-footer-cell{color:#000000de}.mat-calendar-arrow{fill:#0000008a}.mat-datepicker-toggle,.mat-datepicker-content .mat-calendar-next-button,.mat-datepicker-content .mat-calendar-previous-button{color:#0000008a}.mat-calendar-table-header-divider:after{background:rgba(0,0,0,.12)}.mat-calendar-table-header,.mat-calendar-body-label{color:#0000008a}.mat-calendar-body-cell-content,.mat-date-range-input-separator{color:#000000de;border-color:transparent}.mat-calendar-body-disabled>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){color:#00000061}.mat-form-field-disabled .mat-date-range-input-separator{color:#00000061}.mat-calendar-body-in-preview{color:#0000003d}.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){border-color:#00000061}.mat-calendar-body-disabled>.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){border-color:#0000002e}.mat-calendar-body-in-range:before{background:rgba(63,81,181,.2)}.mat-calendar-body-comparison-identical,.mat-calendar-body-in-comparison-range:before{background:rgba(249,171,0,.2)}.mat-calendar-body-comparison-bridge-start:before,[dir=rtl] .mat-calendar-body-comparison-bridge-end:before{background:linear-gradient(to right,rgba(63,81,181,.2) 50%,rgba(249,171,0,.2) 50%)}.mat-calendar-body-comparison-bridge-end:before,[dir=rtl] .mat-calendar-body-comparison-bridge-start:before{background:linear-gradient(to left,rgba(63,81,181,.2) 50%,rgba(249,171,0,.2) 50%)}.mat-calendar-body-in-range>.mat-calendar-body-comparison-identical,.mat-calendar-body-in-comparison-range.mat-calendar-body-in-range:after{background:#a8dab5}.mat-calendar-body-comparison-identical.mat-calendar-body-selected,.mat-calendar-body-in-comparison-range>.mat-calendar-body-selected{background:#46a35e}.mat-calendar-body-selected{background-color:#3f51b5;color:#fff}.mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:#3f51b566}.mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px #fff}.cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical),.cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){background-color:#3f51b54d}@media (hover: hover){.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){background-color:#3f51b54d}}.mat-datepicker-content{box-shadow:0 2px 4px -1px #0003,0 4px 5px #00000024,0 1px 10px #0000001f;background-color:#fff;color:#000000de}.mat-datepicker-content.mat-accent .mat-calendar-body-in-range:before{background:rgba(255,64,129,.2)}.mat-datepicker-content.mat-accent .mat-calendar-body-comparison-identical,.mat-datepicker-content.mat-accent .mat-calendar-body-in-comparison-range:before{background:rgba(249,171,0,.2)}.mat-datepicker-content.mat-accent .mat-calendar-body-comparison-bridge-start:before,.mat-datepicker-content.mat-accent [dir=rtl] .mat-calendar-body-comparison-bridge-end:before{background:linear-gradient(to right,rgba(255,64,129,.2) 50%,rgba(249,171,0,.2) 50%)}.mat-datepicker-content.mat-accent .mat-calendar-body-comparison-bridge-end:before,.mat-datepicker-content.mat-accent [dir=rtl] .mat-calendar-body-comparison-bridge-start:before{background:linear-gradient(to left,rgba(255,64,129,.2) 50%,rgba(249,171,0,.2) 50%)}.mat-datepicker-content.mat-accent .mat-calendar-body-in-range>.mat-calendar-body-comparison-identical,.mat-datepicker-content.mat-accent .mat-calendar-body-in-comparison-range.mat-calendar-body-in-range:after{background:#a8dab5}.mat-datepicker-content.mat-accent .mat-calendar-body-comparison-identical.mat-calendar-body-selected,.mat-datepicker-content.mat-accent .mat-calendar-body-in-comparison-range>.mat-calendar-body-selected{background:#46a35e}.mat-datepicker-content.mat-accent .mat-calendar-body-selected{background-color:#ff4081;color:#fff}.mat-datepicker-content.mat-accent .mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:#ff408166}.mat-datepicker-content.mat-accent .mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px #fff}.mat-datepicker-content.mat-accent .cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical),.mat-datepicker-content.mat-accent .cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){background-color:#ff40814d}@media (hover: hover){.mat-datepicker-content.mat-accent .mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){background-color:#ff40814d}}.mat-datepicker-content.mat-warn .mat-calendar-body-in-range:before{background:rgba(244,67,54,.2)}.mat-datepicker-content.mat-warn .mat-calendar-body-comparison-identical,.mat-datepicker-content.mat-warn .mat-calendar-body-in-comparison-range:before{background:rgba(249,171,0,.2)}.mat-datepicker-content.mat-warn .mat-calendar-body-comparison-bridge-start:before,.mat-datepicker-content.mat-warn [dir=rtl] .mat-calendar-body-comparison-bridge-end:before{background:linear-gradient(to right,rgba(244,67,54,.2) 50%,rgba(249,171,0,.2) 50%)}.mat-datepicker-content.mat-warn .mat-calendar-body-comparison-bridge-end:before,.mat-datepicker-content.mat-warn [dir=rtl] .mat-calendar-body-comparison-bridge-start:before{background:linear-gradient(to left,rgba(244,67,54,.2) 50%,rgba(249,171,0,.2) 50%)}.mat-datepicker-content.mat-warn .mat-calendar-body-in-range>.mat-calendar-body-comparison-identical,.mat-datepicker-content.mat-warn .mat-calendar-body-in-comparison-range.mat-calendar-body-in-range:after{background:#a8dab5}.mat-datepicker-content.mat-warn .mat-calendar-body-comparison-identical.mat-calendar-body-selected,.mat-datepicker-content.mat-warn .mat-calendar-body-in-comparison-range>.mat-calendar-body-selected{background:#46a35e}.mat-datepicker-content.mat-warn .mat-calendar-body-selected{background-color:#f44336;color:#fff}.mat-datepicker-content.mat-warn .mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:#f4433666}.mat-datepicker-content.mat-warn .mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px #fff}.mat-datepicker-content.mat-warn .cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical),.mat-datepicker-content.mat-warn .cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){background-color:#f443364d}@media (hover: hover){.mat-datepicker-content.mat-warn .mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){background-color:#f443364d}}.mat-datepicker-content-touch{box-shadow:0 11px 15px -7px #0003,0 24px 38px 3px #00000024,0 9px 46px 8px #0000001f}.mat-datepicker-toggle-active{color:#3f51b5}.mat-datepicker-toggle-active.mat-accent{color:#ff4081}.mat-datepicker-toggle-active.mat-warn{color:#f44336}.mat-date-range-input-inner[disabled]{color:#00000061}.mat-dialog-container{box-shadow:0 11px 15px -7px #0003,0 24px 38px 3px #00000024,0 9px 46px 8px #0000001f;background:#fff;color:#000000de}.mat-divider{border-top-color:#0000001f}.mat-divider-vertical{border-right-color:#0000001f}.mat-expansion-panel{background:#fff;color:#000000de}.mat-expansion-panel:not([class*=mat-elevation-z]){box-shadow:0 3px 1px -2px #0003,0 2px 2px #00000024,0 1px 5px #0000001f}.mat-action-row{border-top-color:#0000001f}.mat-expansion-panel .mat-expansion-panel-header.cdk-keyboard-focused:not([aria-disabled=true]),.mat-expansion-panel .mat-expansion-panel-header.cdk-program-focused:not([aria-disabled=true]),.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:hover:not([aria-disabled=true]){background:rgba(0,0,0,.04)}@media (hover: none){.mat-expansion-panel:not(.mat-expanded):not([aria-disabled=true]) .mat-expansion-panel-header:hover{background:#fff}}.mat-expansion-panel-header-title{color:#000000de}.mat-expansion-panel-header-description,.mat-expansion-indicator:after{color:#0000008a}.mat-expansion-panel-header[aria-disabled=true]{color:#00000042}.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description{color:inherit}.mat-expansion-panel-header{height:48px}.mat-expansion-panel-header.mat-expanded{height:64px}.mat-form-field-label,.mat-hint{color:#0009}.mat-form-field.mat-focused .mat-form-field-label{color:#3f51b5}.mat-form-field.mat-focused .mat-form-field-label.mat-accent{color:#ff4081}.mat-form-field.mat-focused .mat-form-field-label.mat-warn{color:#f44336}.mat-focused .mat-form-field-required-marker{color:#ff4081}.mat-form-field-ripple{background-color:#000000de}.mat-form-field.mat-focused .mat-form-field-ripple{background-color:#3f51b5}.mat-form-field.mat-focused .mat-form-field-ripple.mat-accent{background-color:#ff4081}.mat-form-field.mat-focused .mat-form-field-ripple.mat-warn{background-color:#f44336}.mat-form-field-type-mat-native-select.mat-focused:not(.mat-form-field-invalid) .mat-form-field-infix:after{color:#3f51b5}.mat-form-field-type-mat-native-select.mat-focused:not(.mat-form-field-invalid).mat-accent .mat-form-field-infix:after{color:#ff4081}.mat-form-field-type-mat-native-select.mat-focused:not(.mat-form-field-invalid).mat-warn .mat-form-field-infix:after{color:#f44336}.mat-form-field.mat-form-field-invalid .mat-form-field-label,.mat-form-field.mat-form-field-invalid .mat-form-field-label.mat-accent,.mat-form-field.mat-form-field-invalid .mat-form-field-label .mat-form-field-required-marker{color:#f44336}.mat-form-field.mat-form-field-invalid .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple.mat-accent{background-color:#f44336}.mat-error{color:#f44336}.mat-form-field-appearance-legacy .mat-form-field-label,.mat-form-field-appearance-legacy .mat-hint{color:#0000008a}.mat-form-field-appearance-legacy .mat-form-field-underline{background-color:#0000006b}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-image:linear-gradient(to right,rgba(0,0,0,.42) 0%,rgba(0,0,0,.42) 33%,transparent 0%);background-size:4px 100%;background-repeat:repeat-x}.mat-form-field-appearance-standard .mat-form-field-underline{background-color:#0000006b}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-image:linear-gradient(to right,rgba(0,0,0,.42) 0%,rgba(0,0,0,.42) 33%,transparent 0%);background-size:4px 100%;background-repeat:repeat-x}.mat-form-field-appearance-fill .mat-form-field-flex{background-color:#0000000a}.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex{background-color:#00000005}.mat-form-field-appearance-fill .mat-form-field-underline:before{background-color:#0000006b}.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-label{color:#00000061}.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-underline:before{background-color:transparent}.mat-form-field-appearance-outline .mat-form-field-outline{color:#0000001f}.mat-form-field-appearance-outline .mat-form-field-outline-thick{color:#000000de}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick{color:#3f51b5}.mat-form-field-appearance-outline.mat-focused.mat-accent .mat-form-field-outline-thick{color:#ff4081}.mat-form-field-appearance-outline.mat-focused.mat-warn .mat-form-field-outline-thick,.mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick{color:#f44336}.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-label{color:#00000061}.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline{color:#0000000f}.mat-icon.mat-primary{color:#3f51b5}.mat-icon.mat-accent{color:#ff4081}.mat-icon.mat-warn{color:#f44336}.mat-form-field-type-mat-native-select .mat-form-field-infix:after{color:#0000008a}.mat-input-element:disabled,.mat-form-field-type-mat-native-select.mat-form-field-disabled .mat-form-field-infix:after{color:#00000061}.mat-input-element{caret-color:#3f51b5}.mat-input-element::placeholder{color:#0000006b}.mat-input-element::-moz-placeholder{color:#0000006b}.mat-input-element::-webkit-input-placeholder{color:#0000006b}.mat-input-element:-ms-input-placeholder{color:#0000006b}.mat-form-field.mat-accent .mat-input-element{caret-color:#ff4081}.mat-form-field.mat-warn .mat-input-element,.mat-form-field-invalid .mat-input-element{caret-color:#f44336}.mat-form-field-type-mat-native-select.mat-form-field-invalid .mat-form-field-infix:after{color:#f44336}.mat-list-base .mat-list-item,.mat-list-base .mat-list-option{color:#000000de}.mat-list-base .mat-subheader{color:#0000008a}.mat-list-base .mat-list-item-disabled{background-color:#eee;color:#00000061}.mat-list-option:hover,.mat-list-option:focus,.mat-nav-list .mat-list-item:hover,.mat-nav-list .mat-list-item:focus,.mat-action-list .mat-list-item:hover,.mat-action-list .mat-list-item:focus{background:rgba(0,0,0,.04)}.mat-list-single-selected-option,.mat-list-single-selected-option:hover,.mat-list-single-selected-option:focus{background:rgba(0,0,0,.12)}.mat-menu-panel{background:#fff}.mat-menu-panel:not([class*=mat-elevation-z]){box-shadow:0 2px 4px -1px #0003,0 4px 5px #00000024,0 1px 10px #0000001f}.mat-menu-item{background:transparent;color:#000000de}.mat-menu-item[disabled],.mat-menu-item[disabled] .mat-menu-submenu-icon,.mat-menu-item[disabled] .mat-icon-no-color{color:#00000061}.mat-menu-item .mat-icon-no-color,.mat-menu-submenu-icon{color:#0000008a}.mat-menu-item:hover:not([disabled]),.mat-menu-item.cdk-program-focused:not([disabled]),.mat-menu-item.cdk-keyboard-focused:not([disabled]),.mat-menu-item-highlighted:not([disabled]){background:rgba(0,0,0,.04)}.mat-paginator{background:#fff}.mat-paginator,.mat-paginator-page-size .mat-select-trigger{color:#0000008a}.mat-paginator-decrement,.mat-paginator-increment{border-top:2px solid rgba(0,0,0,.54);border-right:2px solid rgba(0,0,0,.54)}.mat-paginator-first,.mat-paginator-last{border-top:2px solid rgba(0,0,0,.54)}.mat-icon-button[disabled] .mat-paginator-decrement,.mat-icon-button[disabled] .mat-paginator-increment,.mat-icon-button[disabled] .mat-paginator-first,.mat-icon-button[disabled] .mat-paginator-last{border-color:#00000061}.mat-paginator-container{min-height:56px}.mat-progress-bar-background{fill:#cbd0e9}.mat-progress-bar-buffer{background-color:#cbd0e9}.mat-progress-bar-fill:after{background-color:#3f51b5}.mat-progress-bar.mat-accent .mat-progress-bar-background{fill:#fbccdc}.mat-progress-bar.mat-accent .mat-progress-bar-buffer{background-color:#fbccdc}.mat-progress-bar.mat-accent .mat-progress-bar-fill:after{background-color:#ff4081}.mat-progress-bar.mat-warn .mat-progress-bar-background{fill:#f9ccc9}.mat-progress-bar.mat-warn .mat-progress-bar-buffer{background-color:#f9ccc9}.mat-progress-bar.mat-warn .mat-progress-bar-fill:after{background-color:#f44336}.mat-progress-spinner circle,.mat-spinner circle{stroke:#3f51b5}.mat-progress-spinner.mat-accent circle,.mat-spinner.mat-accent circle{stroke:#ff4081}.mat-progress-spinner.mat-warn circle,.mat-spinner.mat-warn circle{stroke:#f44336}.mat-radio-outer-circle{border-color:#0000008a}.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-outer-circle{border-color:#3f51b5}.mat-radio-button.mat-primary .mat-radio-inner-circle,.mat-radio-button.mat-primary .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-persistent-ripple,.mat-radio-button.mat-primary:active .mat-radio-persistent-ripple{background-color:#3f51b5}.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:#ff4081}.mat-radio-button.mat-accent .mat-radio-inner-circle,.mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-persistent-ripple,.mat-radio-button.mat-accent:active .mat-radio-persistent-ripple{background-color:#ff4081}.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-outer-circle{border-color:#f44336}.mat-radio-button.mat-warn .mat-radio-inner-circle,.mat-radio-button.mat-warn .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-persistent-ripple,.mat-radio-button.mat-warn:active .mat-radio-persistent-ripple{background-color:#f44336}.mat-radio-button.mat-radio-disabled.mat-radio-checked .mat-radio-outer-circle,.mat-radio-button.mat-radio-disabled .mat-radio-outer-circle{border-color:#00000061}.mat-radio-button.mat-radio-disabled .mat-radio-ripple .mat-ripple-element,.mat-radio-button.mat-radio-disabled .mat-radio-inner-circle{background-color:#00000061}.mat-radio-button.mat-radio-disabled .mat-radio-label-content{color:#00000061}.mat-radio-button .mat-ripple-element{background-color:#000}.mat-select-value{color:#000000de}.mat-select-placeholder{color:#0000006b}.mat-select-disabled .mat-select-value{color:#00000061}.mat-select-arrow{color:#0000008a}.mat-select-panel{background:#fff}.mat-select-panel:not([class*=mat-elevation-z]){box-shadow:0 2px 4px -1px #0003,0 4px 5px #00000024,0 1px 10px #0000001f}.mat-select-panel .mat-option.mat-selected:not(.mat-option-multiple){background:rgba(0,0,0,.12)}.mat-form-field.mat-focused.mat-primary .mat-select-arrow{color:#3f51b5}.mat-form-field.mat-focused.mat-accent .mat-select-arrow{color:#ff4081}.mat-form-field.mat-focused.mat-warn .mat-select-arrow,.mat-form-field .mat-select.mat-select-invalid .mat-select-arrow{color:#f44336}.mat-form-field .mat-select.mat-select-disabled .mat-select-arrow{color:#00000061}.mat-drawer-container{background-color:#fafafa;color:#000000de}.mat-drawer{background-color:#fff;color:#000000de}.mat-drawer.mat-drawer-push{background-color:#fff}.mat-drawer:not(.mat-drawer-side){box-shadow:0 8px 10px -5px #0003,0 16px 24px 2px #00000024,0 6px 30px 5px #0000001f}.mat-drawer-side{border-right:solid 1px rgba(0,0,0,.12)}.mat-drawer-side.mat-drawer-end,[dir=rtl] .mat-drawer-side{border-left:solid 1px rgba(0,0,0,.12);border-right:none}[dir=rtl] .mat-drawer-side.mat-drawer-end{border-left:none;border-right:solid 1px rgba(0,0,0,.12)}.mat-drawer-backdrop.mat-drawer-shown{background-color:#0009}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb{background-color:#ff4081}.mat-slide-toggle.mat-checked .mat-slide-toggle-bar{background-color:#ff40818a}.mat-slide-toggle.mat-checked .mat-ripple-element{background-color:#ff4081}.mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-thumb{background-color:#3f51b5}.mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-bar{background-color:#3f51b58a}.mat-slide-toggle.mat-primary.mat-checked .mat-ripple-element{background-color:#3f51b5}.mat-slide-toggle.mat-warn.mat-checked .mat-slide-toggle-thumb{background-color:#f44336}.mat-slide-toggle.mat-warn.mat-checked .mat-slide-toggle-bar{background-color:#f443368a}.mat-slide-toggle.mat-warn.mat-checked .mat-ripple-element{background-color:#f44336}.mat-slide-toggle:not(.mat-checked) .mat-ripple-element{background-color:#000}.mat-slide-toggle-thumb{box-shadow:0 2px 1px -1px #0003,0 1px 1px #00000024,0 1px 3px #0000001f;background-color:#fafafa}.mat-slide-toggle-bar{background-color:#00000061}.mat-slider-track-background{background-color:#00000042}.mat-slider.mat-primary .mat-slider-track-fill,.mat-slider.mat-primary .mat-slider-thumb,.mat-slider.mat-primary .mat-slider-thumb-label{background-color:#3f51b5}.mat-slider.mat-primary .mat-slider-thumb-label-text{color:#fff}.mat-slider.mat-primary .mat-slider-focus-ring{background-color:#3f51b533}.mat-slider.mat-accent .mat-slider-track-fill,.mat-slider.mat-accent .mat-slider-thumb,.mat-slider.mat-accent .mat-slider-thumb-label{background-color:#ff4081}.mat-slider.mat-accent .mat-slider-thumb-label-text{color:#fff}.mat-slider.mat-accent .mat-slider-focus-ring{background-color:#ff408133}.mat-slider.mat-warn .mat-slider-track-fill,.mat-slider.mat-warn .mat-slider-thumb,.mat-slider.mat-warn .mat-slider-thumb-label{background-color:#f44336}.mat-slider.mat-warn .mat-slider-thumb-label-text{color:#fff}.mat-slider.mat-warn .mat-slider-focus-ring{background-color:#f4433633}.mat-slider:hover .mat-slider-track-background,.mat-slider.cdk-focused .mat-slider-track-background{background-color:#00000061}.mat-slider.mat-slider-disabled .mat-slider-track-background,.mat-slider.mat-slider-disabled .mat-slider-track-fill,.mat-slider.mat-slider-disabled .mat-slider-thumb,.mat-slider.mat-slider-disabled:hover .mat-slider-track-background{background-color:#00000042}.mat-slider.mat-slider-min-value .mat-slider-focus-ring{background-color:#0000001f}.mat-slider.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb,.mat-slider.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label{background-color:#000000de}.mat-slider.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb,.mat-slider.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb-label{background-color:#00000042}.mat-slider.mat-slider-min-value:not(.mat-slider-thumb-label-showing) .mat-slider-thumb{border-color:#00000042;background-color:transparent}.mat-slider.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover .mat-slider-thumb,.mat-slider.mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused .mat-slider-thumb{border-color:#00000061}.mat-slider.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled .mat-slider-thumb,.mat-slider.mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled .mat-slider-thumb{border-color:#00000042}.mat-slider-has-ticks .mat-slider-wrapper:after{border-color:#000000b3}.mat-slider-horizontal .mat-slider-ticks{background-image:repeating-linear-gradient(to right,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent);background-image:-moz-repeating-linear-gradient(.0001deg,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent)}.mat-slider-vertical .mat-slider-ticks{background-image:repeating-linear-gradient(to bottom,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent)}.mat-step-header.cdk-keyboard-focused,.mat-step-header.cdk-program-focused,.mat-step-header:hover:not([aria-disabled]),.mat-step-header:hover[aria-disabled=false]{background-color:#0000000a}.mat-step-header:hover[aria-disabled=true]{cursor:default}@media (hover: none){.mat-step-header:hover{background:none}}.mat-step-header .mat-step-label,.mat-step-header .mat-step-optional{color:#0000008a}.mat-step-header .mat-step-icon{background-color:#0000008a;color:#fff}.mat-step-header .mat-step-icon-selected,.mat-step-header .mat-step-icon-state-done,.mat-step-header .mat-step-icon-state-edit{background-color:#3f51b5;color:#fff}.mat-step-header.mat-accent .mat-step-icon{color:#fff}.mat-step-header.mat-accent .mat-step-icon-selected,.mat-step-header.mat-accent .mat-step-icon-state-done,.mat-step-header.mat-accent .mat-step-icon-state-edit{background-color:#ff4081;color:#fff}.mat-step-header.mat-warn .mat-step-icon{color:#fff}.mat-step-header.mat-warn .mat-step-icon-selected,.mat-step-header.mat-warn .mat-step-icon-state-done,.mat-step-header.mat-warn .mat-step-icon-state-edit{background-color:#f44336;color:#fff}.mat-step-header .mat-step-icon-state-error{background-color:transparent;color:#f44336}.mat-step-header .mat-step-label.mat-step-label-active{color:#000000de}.mat-step-header .mat-step-label.mat-step-label-error{color:#f44336}.mat-stepper-horizontal,.mat-stepper-vertical{background-color:#fff}.mat-stepper-vertical-line:before{border-left-color:#0000001f}.mat-horizontal-stepper-header:before,.mat-horizontal-stepper-header:after,.mat-stepper-horizontal-line{border-top-color:#0000001f}.mat-horizontal-stepper-header{height:72px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header,.mat-vertical-stepper-header{padding:24px}.mat-stepper-vertical-line:before{top:-16px;bottom:-16px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:after,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:before{top:36px}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{top:36px}.mat-sort-header-arrow{color:#757575}.mat-tab-nav-bar,.mat-tab-header{border-bottom:1px solid rgba(0,0,0,.12)}.mat-tab-group-inverted-header .mat-tab-nav-bar,.mat-tab-group-inverted-header .mat-tab-header{border-top:1px solid rgba(0,0,0,.12);border-bottom:none}.mat-tab-label,.mat-tab-link{color:#000000de}.mat-tab-label.mat-tab-disabled,.mat-tab-link.mat-tab-disabled{color:#00000061}.mat-tab-header-pagination-chevron{border-color:#000000de}.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:#00000061}.mat-tab-group[class*=mat-background-]>.mat-tab-header,.mat-tab-nav-bar[class*=mat-background-]{border-bottom:none;border-top:none}.mat-tab-group.mat-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:#c5cae94d}.mat-tab-group.mat-primary .mat-ink-bar,.mat-tab-nav-bar.mat-primary .mat-ink-bar{background-color:#3f51b5}.mat-tab-group.mat-primary.mat-background-primary>.mat-tab-header .mat-ink-bar,.mat-tab-group.mat-primary.mat-background-primary>.mat-tab-link-container .mat-ink-bar,.mat-tab-nav-bar.mat-primary.mat-background-primary>.mat-tab-header .mat-ink-bar,.mat-tab-nav-bar.mat-primary.mat-background-primary>.mat-tab-link-container .mat-ink-bar{background-color:#fff}.mat-tab-group.mat-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:#ff80ab4d}.mat-tab-group.mat-accent .mat-ink-bar,.mat-tab-nav-bar.mat-accent .mat-ink-bar{background-color:#ff4081}.mat-tab-group.mat-accent.mat-background-accent>.mat-tab-header .mat-ink-bar,.mat-tab-group.mat-accent.mat-background-accent>.mat-tab-link-container .mat-ink-bar,.mat-tab-nav-bar.mat-accent.mat-background-accent>.mat-tab-header .mat-ink-bar,.mat-tab-nav-bar.mat-accent.mat-background-accent>.mat-tab-link-container .mat-ink-bar{background-color:#fff}.mat-tab-group.mat-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:#ffcdd24d}.mat-tab-group.mat-warn .mat-ink-bar,.mat-tab-nav-bar.mat-warn .mat-ink-bar{background-color:#f44336}.mat-tab-group.mat-warn.mat-background-warn>.mat-tab-header .mat-ink-bar,.mat-tab-group.mat-warn.mat-background-warn>.mat-tab-link-container .mat-ink-bar,.mat-tab-nav-bar.mat-warn.mat-background-warn>.mat-tab-header .mat-ink-bar,.mat-tab-nav-bar.mat-warn.mat-background-warn>.mat-tab-link-container .mat-ink-bar{background-color:#fff}.mat-tab-group.mat-background-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:#c5cae94d}.mat-tab-group.mat-background-primary>.mat-tab-header,.mat-tab-group.mat-background-primary>.mat-tab-link-container,.mat-tab-group.mat-background-primary>.mat-tab-header-pagination,.mat-tab-nav-bar.mat-background-primary>.mat-tab-header,.mat-tab-nav-bar.mat-background-primary>.mat-tab-link-container,.mat-tab-nav-bar.mat-background-primary>.mat-tab-header-pagination{background-color:#3f51b5}.mat-tab-group.mat-background-primary>.mat-tab-header .mat-tab-label,.mat-tab-group.mat-background-primary>.mat-tab-link-container .mat-tab-link,.mat-tab-nav-bar.mat-background-primary>.mat-tab-header .mat-tab-label,.mat-tab-nav-bar.mat-background-primary>.mat-tab-link-container .mat-tab-link{color:#fff}.mat-tab-group.mat-background-primary>.mat-tab-header .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-primary>.mat-tab-link-container .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-primary>.mat-tab-header .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-primary>.mat-tab-link-container .mat-tab-link.mat-tab-disabled{color:#fff6}.mat-tab-group.mat-background-primary>.mat-tab-header .mat-tab-header-pagination-chevron,.mat-tab-group.mat-background-primary>.mat-tab-header-pagination .mat-tab-header-pagination-chevron,.mat-tab-group.mat-background-primary>.mat-tab-link-container .mat-focus-indicator:before,.mat-tab-group.mat-background-primary>.mat-tab-header .mat-focus-indicator:before,.mat-tab-nav-bar.mat-background-primary>.mat-tab-header .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-primary>.mat-tab-header-pagination .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-primary>.mat-tab-link-container .mat-focus-indicator:before,.mat-tab-nav-bar.mat-background-primary>.mat-tab-header .mat-focus-indicator:before{border-color:#fff}.mat-tab-group.mat-background-primary>.mat-tab-header .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-group.mat-background-primary>.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-primary>.mat-tab-header .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-primary>.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:#fff;opacity:.4}.mat-tab-group.mat-background-primary>.mat-tab-header .mat-ripple-element,.mat-tab-group.mat-background-primary>.mat-tab-link-container .mat-ripple-element,.mat-tab-group.mat-background-primary>.mat-tab-header-pagination .mat-ripple-element,.mat-tab-nav-bar.mat-background-primary>.mat-tab-header .mat-ripple-element,.mat-tab-nav-bar.mat-background-primary>.mat-tab-link-container .mat-ripple-element,.mat-tab-nav-bar.mat-background-primary>.mat-tab-header-pagination .mat-ripple-element{background-color:#fff;opacity:.12}.mat-tab-group.mat-background-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:#ff80ab4d}.mat-tab-group.mat-background-accent>.mat-tab-header,.mat-tab-group.mat-background-accent>.mat-tab-link-container,.mat-tab-group.mat-background-accent>.mat-tab-header-pagination,.mat-tab-nav-bar.mat-background-accent>.mat-tab-header,.mat-tab-nav-bar.mat-background-accent>.mat-tab-link-container,.mat-tab-nav-bar.mat-background-accent>.mat-tab-header-pagination{background-color:#ff4081}.mat-tab-group.mat-background-accent>.mat-tab-header .mat-tab-label,.mat-tab-group.mat-background-accent>.mat-tab-link-container .mat-tab-link,.mat-tab-nav-bar.mat-background-accent>.mat-tab-header .mat-tab-label,.mat-tab-nav-bar.mat-background-accent>.mat-tab-link-container .mat-tab-link{color:#fff}.mat-tab-group.mat-background-accent>.mat-tab-header .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-accent>.mat-tab-link-container .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-accent>.mat-tab-header .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-accent>.mat-tab-link-container .mat-tab-link.mat-tab-disabled{color:#fff6}.mat-tab-group.mat-background-accent>.mat-tab-header .mat-tab-header-pagination-chevron,.mat-tab-group.mat-background-accent>.mat-tab-header-pagination .mat-tab-header-pagination-chevron,.mat-tab-group.mat-background-accent>.mat-tab-link-container .mat-focus-indicator:before,.mat-tab-group.mat-background-accent>.mat-tab-header .mat-focus-indicator:before,.mat-tab-nav-bar.mat-background-accent>.mat-tab-header .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-accent>.mat-tab-header-pagination .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-accent>.mat-tab-link-container .mat-focus-indicator:before,.mat-tab-nav-bar.mat-background-accent>.mat-tab-header .mat-focus-indicator:before{border-color:#fff}.mat-tab-group.mat-background-accent>.mat-tab-header .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-group.mat-background-accent>.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-accent>.mat-tab-header .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-accent>.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:#fff;opacity:.4}.mat-tab-group.mat-background-accent>.mat-tab-header .mat-ripple-element,.mat-tab-group.mat-background-accent>.mat-tab-link-container .mat-ripple-element,.mat-tab-group.mat-background-accent>.mat-tab-header-pagination .mat-ripple-element,.mat-tab-nav-bar.mat-background-accent>.mat-tab-header .mat-ripple-element,.mat-tab-nav-bar.mat-background-accent>.mat-tab-link-container .mat-ripple-element,.mat-tab-nav-bar.mat-background-accent>.mat-tab-header-pagination .mat-ripple-element{background-color:#fff;opacity:.12}.mat-tab-group.mat-background-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:#ffcdd24d}.mat-tab-group.mat-background-warn>.mat-tab-header,.mat-tab-group.mat-background-warn>.mat-tab-link-container,.mat-tab-group.mat-background-warn>.mat-tab-header-pagination,.mat-tab-nav-bar.mat-background-warn>.mat-tab-header,.mat-tab-nav-bar.mat-background-warn>.mat-tab-link-container,.mat-tab-nav-bar.mat-background-warn>.mat-tab-header-pagination{background-color:#f44336}.mat-tab-group.mat-background-warn>.mat-tab-header .mat-tab-label,.mat-tab-group.mat-background-warn>.mat-tab-link-container .mat-tab-link,.mat-tab-nav-bar.mat-background-warn>.mat-tab-header .mat-tab-label,.mat-tab-nav-bar.mat-background-warn>.mat-tab-link-container .mat-tab-link{color:#fff}.mat-tab-group.mat-background-warn>.mat-tab-header .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-warn>.mat-tab-link-container .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-warn>.mat-tab-header .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-warn>.mat-tab-link-container .mat-tab-link.mat-tab-disabled{color:#fff6}.mat-tab-group.mat-background-warn>.mat-tab-header .mat-tab-header-pagination-chevron,.mat-tab-group.mat-background-warn>.mat-tab-header-pagination .mat-tab-header-pagination-chevron,.mat-tab-group.mat-background-warn>.mat-tab-link-container .mat-focus-indicator:before,.mat-tab-group.mat-background-warn>.mat-tab-header .mat-focus-indicator:before,.mat-tab-nav-bar.mat-background-warn>.mat-tab-header .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-warn>.mat-tab-header-pagination .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-warn>.mat-tab-link-container .mat-focus-indicator:before,.mat-tab-nav-bar.mat-background-warn>.mat-tab-header .mat-focus-indicator:before{border-color:#fff}.mat-tab-group.mat-background-warn>.mat-tab-header .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-group.mat-background-warn>.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-warn>.mat-tab-header .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-warn>.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:#fff;opacity:.4}.mat-tab-group.mat-background-warn>.mat-tab-header .mat-ripple-element,.mat-tab-group.mat-background-warn>.mat-tab-link-container .mat-ripple-element,.mat-tab-group.mat-background-warn>.mat-tab-header-pagination .mat-ripple-element,.mat-tab-nav-bar.mat-background-warn>.mat-tab-header .mat-ripple-element,.mat-tab-nav-bar.mat-background-warn>.mat-tab-link-container .mat-ripple-element,.mat-tab-nav-bar.mat-background-warn>.mat-tab-header-pagination .mat-ripple-element{background-color:#fff;opacity:.12}.mat-toolbar{background:#f5f5f5;color:#000000de}.mat-toolbar.mat-primary{background:#3f51b5;color:#fff}.mat-toolbar.mat-accent{background:#ff4081;color:#fff}.mat-toolbar.mat-warn{background:#f44336;color:#fff}.mat-toolbar .mat-form-field-underline,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-focused .mat-form-field-ripple{background-color:currentColor}.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-select-value,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-toolbar-multiple-rows{min-height:64px}.mat-toolbar-row,.mat-toolbar-single-row{height:64px}@media (max-width: 599px){.mat-toolbar-multiple-rows{min-height:56px}.mat-toolbar-row,.mat-toolbar-single-row{height:56px}}.mat-tooltip{background:rgba(97,97,97,.9)}.mat-tree{background:#fff}.mat-tree-node,.mat-nested-tree-node{color:#000000de}.mat-tree-node{min-height:48px}.mat-snack-bar-container{color:#ffffffb3;background:#323232;box-shadow:0 3px 5px -1px #0003,0 6px 10px #00000024,0 1px 18px #0000001f}.mat-simple-snackbar-action{color:#ff4081}.ng-select.ng-select-opened>.ng-select-container{background:#fff;border-color:#b3b3b3 #ccc #d9d9d9}.ng-select.ng-select-opened>.ng-select-container:hover{box-shadow:none}.ng-select.ng-select-opened>.ng-select-container .ng-arrow{top:-2px;border-color:transparent transparent #999;border-width:0 5px 5px}.ng-select.ng-select-opened>.ng-select-container .ng-arrow:hover{border-color:transparent transparent #333}.ng-select.ng-select-opened.ng-select-top>.ng-select-container{border-top-right-radius:0;border-top-left-radius:0}.ng-select.ng-select-opened.ng-select-right>.ng-select-container{border-top-right-radius:0;border-bottom-right-radius:0}.ng-select.ng-select-opened.ng-select-bottom>.ng-select-container{border-bottom-right-radius:0;border-bottom-left-radius:0}.ng-select.ng-select-opened.ng-select-left>.ng-select-container{border-top-left-radius:0;border-bottom-left-radius:0}.ng-select.ng-select-focused:not(.ng-select-opened)>.ng-select-container{border-color:#007eff;box-shadow:inset 0 1px 1px #00000013,0 0 0 3px #007eff1a}.ng-select.ng-select-disabled>.ng-select-container{background-color:#f9f9f9}.ng-select .ng-has-value .ng-placeholder{display:none}.ng-select .ng-select-container{color:#333;background-color:#fff;border-radius:4px;border:1px solid #ccc;min-height:36px;align-items:center}.ng-select .ng-select-container:hover{box-shadow:0 1px #0000000f}.ng-select .ng-select-container .ng-value-container{align-items:center;padding-left:10px}[dir=rtl] .ng-select .ng-select-container .ng-value-container{padding-right:10px;padding-left:0}.ng-select .ng-select-container .ng-value-container .ng-placeholder{color:#999}.ng-select.ng-select-single .ng-select-container{height:36px}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{top:5px;left:0;padding-left:10px;padding-right:50px}[dir=rtl] .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{padding-right:10px;padding-left:50px}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value{background-color:#f9f9f9;border:1px solid #e6e6e6}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-label{padding:0 5px}.ng-select.ng-select-multiple .ng-select-container .ng-value-container{padding-top:5px;padding-left:7px}[dir=rtl] .ng-select.ng-select-multiple .ng-select-container .ng-value-container{padding-right:7px;padding-left:0}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{font-size:.9em;margin-bottom:5px;color:#333;background-color:#ebf5ff;border-radius:2px;margin-right:5px}[dir=rtl] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{margin-right:0;margin-left:5px}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled{background-color:#f9f9f9}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-label{padding-left:5px}[dir=rtl] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-label{padding-left:0;padding-right:5px}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-label,.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:inline-block;padding:1px 5px}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon:hover{background-color:#d1e8ff}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.left{border-right:1px solid #b8dbff}[dir=rtl] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.left{border-left:1px solid #b8dbff;border-right:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.right{border-left:1px solid #b8dbff}[dir=rtl] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.right{border-left:0;border-right:1px solid #b8dbff}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{padding:0 0 3px 3px}[dir=rtl] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{padding:0 3px 3px 0}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input>input{color:#000}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{top:5px;padding-bottom:5px;padding-left:3px}[dir=rtl] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{padding-right:3px;padding-left:0}.ng-select .ng-clear-wrapper{color:#999}.ng-select .ng-clear-wrapper:hover .ng-clear{color:#d0021b}.ng-select .ng-spinner-zone{padding:5px 5px 0 0}[dir=rtl] .ng-select .ng-spinner-zone{padding:5px 0 0 5px}.ng-select .ng-arrow-wrapper{width:25px;padding-right:5px}[dir=rtl] .ng-select .ng-arrow-wrapper{padding-left:5px;padding-right:0}.ng-select .ng-arrow-wrapper:hover .ng-arrow{border-top-color:#666}.ng-select .ng-arrow-wrapper .ng-arrow{border-color:#999 transparent transparent;border-style:solid;border-width:5px 5px 2.5px}.ng-dropdown-panel{background-color:#fff;border:1px solid #ccc;box-shadow:0 1px #0000000f;left:0}.ng-dropdown-panel.ng-select-top{bottom:100%;border-top-right-radius:4px;border-top-left-radius:4px;border-bottom-color:#e6e6e6;margin-bottom:-1px}.ng-dropdown-panel.ng-select-top .ng-dropdown-panel-items .ng-option:first-child{border-top-right-radius:4px;border-top-left-radius:4px}.ng-dropdown-panel.ng-select-right{left:100%;top:0;border-top-right-radius:4px;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-bottom-color:#e6e6e6;margin-bottom:-1px}.ng-dropdown-panel.ng-select-right .ng-dropdown-panel-items .ng-option:first-child{border-top-right-radius:4px}.ng-dropdown-panel.ng-select-bottom{top:100%;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-top-color:#e6e6e6;margin-top:-1px}.ng-dropdown-panel.ng-select-bottom .ng-dropdown-panel-items .ng-option:last-child{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.ng-dropdown-panel.ng-select-left{left:-100%;top:0;border-top-left-radius:4px;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-bottom-color:#e6e6e6;margin-bottom:-1px}.ng-dropdown-panel.ng-select-left .ng-dropdown-panel-items .ng-option:first-child{border-top-left-radius:4px}.ng-dropdown-panel .ng-dropdown-header{border-bottom:1px solid #ccc;padding:5px 7px}.ng-dropdown-panel .ng-dropdown-footer{border-top:1px solid #ccc;padding:5px 7px}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{-webkit-user-select:none;user-select:none;padding:8px 10px;font-weight:500;color:#0000008a;cursor:pointer}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-disabled{cursor:default}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-marked{background-color:#f5faff}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-selected,.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-selected.ng-option-marked{color:#0000008a;background-color:#ebf5ff;font-weight:600}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{background-color:#fff;color:#000000de;padding:8px 10px}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected,.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected.ng-option-marked{color:#333;background-color:#ebf5ff}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected .ng-option-label,.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected.ng-option-marked .ng-option-label{font-weight:600}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-marked{background-color:#f5faff;color:#333}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-disabled{color:#ccc}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-child{padding-left:22px}[dir=rtl] .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-child{padding-right:22px;padding-left:0}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-tag-label{font-size:80%;font-weight:400;padding-right:5px}[dir=rtl] .ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-tag-label{padding-left:5px;padding-right:0}[dir=rtl] .ng-dropdown-panel{direction:rtl;text-align:right}.oper-button,:host button,.oper-button--transparentBorder,.oper-button--danger,.oper-button--icon,.oper-button--transparent,.oper-button--transparentDanger,.oper-button--secondary,.oper-button--primary{-webkit-appearance:none;appearance:none;outline:none;cursor:pointer;background:transparent;border:none;font-family:Helvetica Neue,sans-serif;font-weight:400;padding:0;margin:0;font-size:1em;color:inherit;display:inline-block;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;height:2.5rem;max-width:100%;padding:0 1rem;font-weight:700;color:var(--button-text-color);background:var(--button-background);border:var(--button-border);border-radius:var(--button-border-radius)}.oper-button:not([disabled]):active,:host button:not([disabled]):active,.oper-button--transparentBorder:not([disabled]):active,.oper-button--danger:not([disabled]):active,.oper-button--icon:not([disabled]):active,.oper-button--transparent:not([disabled]):active,.oper-button--transparentDanger:not([disabled]):active,.oper-button--secondary:not([disabled]):active,.oper-button--primary:not([disabled]):active{outline:none}.oper-button:not([disabled]):focus,:host button:not([disabled]):focus,.oper-button--transparentBorder:not([disabled]):focus,.oper-button--danger:not([disabled]):focus,.oper-button--icon:not([disabled]):focus,.oper-button--transparent:not([disabled]):focus,.oper-button--transparentDanger:not([disabled]):focus,.oper-button--secondary:not([disabled]):focus,.oper-button--primary:not([disabled]):focus{outline:none}.oper-button[disabled],:host button[disabled],[disabled].oper-button--transparentBorder,[disabled].oper-button--danger,[disabled].oper-button--icon,[disabled].oper-button--transparent,[disabled].oper-button--transparentDanger,[disabled].oper-button--secondary,[disabled].oper-button--primary{opacity:.66;cursor:default}.oper-button.oper-button--pending,:host button.oper-button--pending,.oper-button--pending.oper-button--transparentBorder,.oper-button--pending.oper-button--danger,.oper-button--pending.oper-button--icon,.oper-button--pending.oper-button--transparent,.oper-button--pending.oper-button--transparentDanger,.oper-button--pending.oper-button--secondary,.oper-button--pending.oper-button--primary{background-image:url(\"data:image/svg+xml;charset=UTF-8,%3csvg version='1.1' id='loader' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='25px' height='25px' viewBox='0 0 60 60' style='enable-background:new 0 0 60 60;' xml:space='preserve'%3e%3cpath fill='%23fff' d='M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z'%3e%3canimateTransform attributeType='xml' attributeName='transform' type='rotate' from='0 25 25' to='360 25 25' dur='0.6s' repeatCount='indefinite'/%3e%3c/path%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:center}.oper-button--primary{color:var(--primary-button-text-color);background:var(--primary-button-background-color);border:var(--primary-button-border);border-radius:var(--primary-button-border-radius)}.oper-button--primary:not([disabled]):active{color:var(--primary-button-active-text-color);background:var(--primary-button-active-background-color);outline:none}.oper-button--primary:not([disabled]):focus{color:var(--primary-button-active-text-color);background:var(--primary-button-active-background-color);outline:none}.oper-button--primary[disabled]{color:var(--primary-button-disabled-text-color);background:var(--primary-button-disabled-background-color);border:var(--primary-button-disabled-border);cursor:default}.oper-button--secondary{color:var(--secondary-button-text-color);border:var(--secondary-button-border);border-radius:var(--secondary-button-border-radius);background:var(--secondary-button-background-color)}.oper-button--secondary:not([disabled]):active{color:var(--secondary-button-disabled-text-color);background:var(--secondary-button-active-background-color);outline:none}.oper-button--secondary:not([disabled]):focus{color:var(--secondary-button-active-text-color);background:var(--secondary-button-active-background-color);outline:none}.oper-button--secondary[disabled]{color:var(--secondary-button-disabled-text-color);background:var(--secondary-button-disabled-background-color);border:var(--secondary-button-disabled-border);cursor:default}.oper-button--secondary.oper-button--pending{background-image:url(\"data:image/svg+xml;charset=UTF-8,%3csvg version='1.1' id='loader' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='25px' height='25px' viewBox='0 0 60 60' style='enable-background:new 0 0 60 60;' xml:space='preserve'%3e%3cpath fill='%23fff' d='M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z'%3e%3canimateTransform attributeType='xml' attributeName='transform' type='rotate' from='0 25 25' to='360 25 25' dur='0.6s' repeatCount='indefinite'/%3e%3c/path%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:center}.oper-button--transparent,.oper-button--transparentDanger{background:transparent;color:var(--color-text-primary)}.oper-button--transparent:not([disabled]):active,.oper-button--transparentDanger:not([disabled]):active{background:var(--color-primary-shade75-alpha25)}.oper-button--transparent:not([disabled]):focus,.oper-button--transparentDanger:not([disabled]):focus{background:transparent;box-shadow:none}.oper-button--icon{background:transparent;color:#000;border-radius:99999px;width:36px;padding:0}.oper-button--icon:focus{box-shadow:none}.oper-button--danger{color:#fff;background:#cc0000}.oper-button--danger:not([disabled]):active{color:#fff;background:#990000}.oper-button--transparentDanger:not([disabled]):active{color:#fff;background:#990000}.oper-button--transparentBorder{background:transparent;border:1px solid #e5e5e5;color:var(--color-link-primary)}.oper-button--transparentBorder:not([disabled]):active{background:#cecece}.oper-button--transparentBorder:not([disabled]):focus{box-shadow:0 0 0 5px #f6f6f6}.oper-button--transparentBorder[disabled]{opacity:.66;cursor:default}.oper-form,.form{position:static}.oper-form-item:not(:last-child){margin-bottom:1.5rem}.oper-form-label,.label .form-item-label{display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-bottom:1rem}.oper-form-error,.form-item-error{color:var(--color-danger)}.oper-form-errors{list-style:none;padding:0;margin:0;color:#c00;border-radius:.5rem;background-color:#fcf2f2}.oper-form-errors-item{padding:.75rem}.oper-form-errors-item:not(:last-child){border-bottom:1px solid #f7d6d6}.oper-form-textInput,.input-group,.form-item-textarea,.form-item-input{font-size:15px;display:block;font-family:Helvetica Neue,sans-serif;font-weight:400;border:none;padding:0;margin:0;outline:none;width:100%;-webkit-appearance:none;appearance:none;box-sizing:border-box;height:2.5rem;padding:0 .75rem;border-radius:var(--input-border-radius, .5rem);border:var(--input-border, 1px solid rgba(0, 0, 0, .25));color:var(--input-text-color);background:var(--input-background, white)}.oper-form-textInput::placeholder,.input-group::placeholder,.form-item-textarea::placeholder,.form-item-input::placeholder{color:#666}.oper-form-textInput:focus,.input-group:focus,.form-item-textarea:focus,.form-item-input:focus{box-shadow:0 0 0 3px var(--color-primary-alpha25)}.oper-form-textInput:disabled,.input-group:disabled,.form-item-textarea:disabled,.form-item-input:disabled{opacity:.66}.oper-form-textInput.oper-form-textInput--invalid,.oper-form-textInput--invalid.input-group,.oper-form-textInput--invalid.form-item-textarea,.oper-form-textInput--invalid.form-item-input,.oper-form-textInput.ng-touched.ng-invalid,.ng-touched.ng-invalid.input-group,.ng-touched.ng-invalid.form-item-textarea,.ng-touched.ng-invalid.form-item-input{border-color:#c00;color:#c00;box-shadow:0 0 0 5px #cc000040}.oper-form-textInput:-webkit-autofill,.input-group:-webkit-autofill,.form-item-textarea:-webkit-autofill,.form-item-input:-webkit-autofill,.oper-form-textInput:-webkit-autofill:hover,.oper-form-textInput:-webkit-autofill:focus,.oper-form-textInput:-webkit-autofill:active{border-radius:var(--input-border-radius, .5rem);border:var(--input-border, 1px solid rgba(0, 0, 0, .25));color:var(--input-text-color);background:var(--input-background, white)}.oper-select,.select,.oper-select--secondary,.oper-select--primary{display:inline-block;font-size:15px;font-family:Helvetica Neue,sans-serif;font-weight:700;height:2.5rem;padding:0 2rem 0 .75rem;max-width:100%;box-sizing:border-box;margin:0;border:var(--input-border);border-radius:var(--input-border-radius);-webkit-appearance:none;appearance:none;color:var(--input-text-color);background:var(--input-background);background-repeat:no-repeat,repeat;background-position:right .75rem top 50%,0 0;background-size:.75rem auto,100%}.oper-select::-ms-expand,.select::-ms-expand,.oper-select--secondary::-ms-expand,.oper-select--primary::-ms-expand{display:none}.oper-select:not([disabled]):hover,.select:not([disabled]):hover,.oper-select--secondary:not([disabled]):hover,.oper-select--primary:not([disabled]):hover{background:var(--input-background)}.oper-select:focus,.select:focus,.oper-select--secondary:focus,.oper-select--primary:focus{outline:none;border:var(--input-border);box-shadow:0 0 0 5px var(--color-primary-alpha25)}.oper-select.no-value-selected,.no-value-selected.select,.no-value-selected.oper-select--secondary,.no-value-selected.oper-select--primary{color:var(--input-text-color)}.oper-select option,.select option,.oper-select--secondary option,.oper-select--primary option{font-weight:400}*[dir=rtl] .oper-select,*[dir=rtl] .select,*[dir=rtl] .oper-select--secondary,*[dir=rtl] .oper-select--primary,:root:lang(ar) .oper-select,:root:lang(ar) .select,:root:lang(ar) .oper-select--secondary,:root:lang(ar) .oper-select--primary,:root:lang(iw) .oper-select,:root:lang(iw) .select,:root:lang(iw) .oper-select--secondary,:root:lang(iw) .oper-select--primary{background-position:left .75rem top 50%,0 0;padding:0 .75rem 0 2rem}.oper-select:disabled,.select:disabled,.oper-select--secondary:disabled,.oper-select--primary:disabled,.oper-select[aria-disabled=true],[aria-disabled=true].select,[aria-disabled=true].oper-select--secondary,[aria-disabled=true].oper-select--primary{opacity:.66}@media (pointer: coarse){.oper-select,.select,.oper-select--secondary,.oper-select--primary{font-size:16px}}.oper-select.ng-touched.ng-invalid,.ng-touched.ng-invalid.select,.ng-touched.ng-invalid.oper-select--secondary,.ng-touched.ng-invalid.oper-select--primary{border-color:#c00;box-shadow:0 0 0 5px #cc000040}.oper-select--primary{color:var(--input-text-color);background:var(--input-background);background-image:url(data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhciIgZGF0YS1pY29uPSJjaGV2cm9uLWRvd24iIGNsYXNzPSJzdmctaW5saW5lLS1mYSBmYS1jaGV2cm9uLWRvd24gZmEtdy0xNCIgcm9sZT0iaW1nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNNDQxLjkgMTY3LjNsLTE5LjgtMTkuOGMtNC43LTQuNy0xMi4zLTQuNy0xNyAwTDIyNCAzMjguMiA0Mi45IDE0Ny41Yy00LjctNC43LTEyLjMtNC43LTE3IDBMNi4xIDE2Ny4zYy00LjcgNC43LTQuNyAxMi4zIDAgMTdsMjA5LjQgMjA5LjRjNC43IDQuNyAxMi4zIDQuNyAxNyAwbDIwOS40LTIwOS40YzQuNy00LjcgNC43LTEyLjMgMC0xN3oiPjwvcGF0aD48L3N2Zz4=),var(--input-text-color)}.oper-select--primary:not([disabled]):hover{background:var(--input-background);background-image:url(data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhciIgZGF0YS1pY29uPSJjaGV2cm9uLWRvd24iIGNsYXNzPSJzdmctaW5saW5lLS1mYSBmYS1jaGV2cm9uLWRvd24gZmEtdy0xNCIgcm9sZT0iaW1nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNNDQxLjkgMTY3LjNsLTE5LjgtMTkuOGMtNC43LTQuNy0xMi4zLTQuNy0xNyAwTDIyNCAzMjguMiA0Mi45IDE0Ny41Yy00LjctNC43LTEyLjMtNC43LTE3IDBMNi4xIDE2Ny4zYy00LjcgNC43LTQuNyAxMi4zIDAgMTdsMjA5LjQgMjA5LjRjNC43IDQuNyAxMi4zIDQuNyAxNyAwbDIwOS40LTIwOS40YzQuNy00LjcgNC43LTEyLjMgMC0xN3oiPjwvcGF0aD48L3N2Zz4=),var(--input-text-color)}.oper-select--primary:focus{box-shadow:0 0 0 5px var(--color-primary-alpha25);color:var(--input-text-color)}.oper-select--secondary{color:var(--input-text-color);background:var(--input-background);background-image:url(data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhciIgZGF0YS1pY29uPSJjaGV2cm9uLWRvd24iIGNsYXNzPSJzdmctaW5saW5lLS1mYSBmYS1jaGV2cm9uLWRvd24gZmEtdy0xNCIgcm9sZT0iaW1nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNNDQxLjkgMTY3LjNsLTE5LjgtMTkuOGMtNC43LTQuNy0xMi4zLTQuNy0xNyAwTDIyNCAzMjguMiA0Mi45IDE0Ny41Yy00LjctNC43LTEyLjMtNC43LTE3IDBMNi4xIDE2Ny4zYy00LjcgNC43LTQuNyAxMi4zIDAgMTdsMjA5LjQgMjA5LjRjNC43IDQuNyAxMi4zIDQuNyAxNyAwbDIwOS40LTIwOS40YzQuNy00LjcgNC43LTEyLjMgMC0xN3oiPjwvcGF0aD48L3N2Zz4=),var(--input-text-color)}.oper-select--secondary:not([disabled]):hover{background:var(--input-background);background-image:url(data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhciIgZGF0YS1pY29uPSJjaGV2cm9uLWRvd24iIGNsYXNzPSJzdmctaW5saW5lLS1mYSBmYS1jaGV2cm9uLWRvd24gZmEtdy0xNCIgcm9sZT0iaW1nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNNDQxLjkgMTY3LjNsLTE5LjgtMTkuOGMtNC43LTQuNy0xMi4zLTQuNy0xNyAwTDIyNCAzMjguMiA0Mi45IDE0Ny41Yy00LjctNC43LTEyLjMtNC43LTE3IDBMNi4xIDE2Ny4zYy00LjcgNC43LTQuNyAxMi4zIDAgMTdsMjA5LjQgMjA5LjRjNC43IDQuNyAxMi4zIDQuNyAxNyAwbDIwOS40LTIwOS40YzQuNy00LjcgNC43LTEyLjMgMC0xN3oiPjwvcGF0aD48L3N2Zz4=),var(--input-text-color)}.oper-select--secondary:focus{box-shadow:0 0 0 5px var(--color-secondary-alpha25);color:var(--input-text-color)}.ng-select-oper.ng-dropdown-panel,.ng-dropdown-panel.ng-select-oper--primary{background:white;border:var(--input-border, 1px solid rgba(0, 0, 0, .25));width:auto!important;transition:opacity .1s linear}.ng-select-oper.ng-dropdown-panel.ng-select-top,.ng-dropdown-panel.ng-select-top.ng-select-oper--primary,.ng-select-oper.ng-dropdown-panel.ng-select-top .ng-option:first-child,.ng-dropdown-panel.ng-select-top.ng-select-oper--primary .ng-option:first-child{border-top-right-radius:.5rem;border-top-left-radius:.5rem}.ng-select-oper.ng-dropdown-panel.ng-select-bottom,.ng-dropdown-panel.ng-select-bottom.ng-select-oper--primary{border-bottom-right-radius:.5rem;border-bottom-left-radius:.5rem}.ng-select-oper.ng-dropdown-panel.ng-select-bottom .ng-option:last-child,.ng-dropdown-panel.ng-select-bottom.ng-select-oper--primary .ng-option:last-child{border-bottom-right-radius:.5rem;border-bottom-left-radius:.5rem}.ng-select-oper.ng-dropdown-panel .ng-dropdown-panel-items .ng-option,.ng-dropdown-panel.ng-select-oper--primary .ng-dropdown-panel-items .ng-option,.ng-select-oper.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-disabled,.ng-dropdown-panel.ng-select-oper--primary .ng-dropdown-panel-items .ng-option.ng-option-disabled{background:var(--input-background)}.ng-select-oper.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-marked,.ng-dropdown-panel.ng-select-oper--primary .ng-dropdown-panel-items .ng-option.ng-option-marked{background:var(--input-background-marked)}.ng-select-oper.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected,.ng-dropdown-panel.ng-select-oper--primary .ng-dropdown-panel-items .ng-option.ng-option-selected{background:var(--input-background)}.ng-select-oper.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected.ng-option-marked,.ng-dropdown-panel.ng-select-oper--primary .ng-dropdown-panel-items .ng-option.ng-option-selected.ng-option-marked{background:var(--input-background-marked)}.ng-select-oper--primary.ng-dropdown-panel{background:var(--input-background);border:var(--input-border);transition:opacity .1s linear}.ng-select-oper--primary.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{color:var(--input-text-color);background:var(--input-background)}.ng-select-oper--primary.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-disabled{background:var(--input-background)}.ng-select-oper--primary.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-marked{background:var(--input-background-marked)}.ng-select-oper--primary.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected{background:var(--input-background)}.ng-select-oper--primary.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected.ng-option-marked{background:var(--input-background-marked)}input:-webkit-autofill,input:-webkit-autofill:hover,input:-webkit-autofill:focus,input:-webkit-autofill:active{-webkit-transition:background-color 5000s;transition:background-color 5000s;-webkit-text-fill-color:var(--color-text-primary)!important}input::-webkit-date-and-time-value{text-align:left}.disable-pointer-events{pointer-events:none}.cursor-pointer{cursor:pointer}sup{font-weight:700}:host button{border-radius:.5rem;background-color:transparent;border:1px solid #ccc;color:var(--color-primary)}:host button .mat-icon{top:-3px;right:8px;font-size:16px;width:16px;height:16px;z-index:9}.select{width:100%}.form-item.form-item--inlined{display:flex;flex-wrap:wrap;height:2.5rem;padding:1px 2px}.form-item.form-item--inlined .form-item-label{flex-shrink:0;margin-bottom:0rem!important;overflow:visible;font-size:15px;white-space:normal}.form-item.form-item--inlined .form-item-label .link{cursor:pointer;color:var(--color-link-primary)}.form-item.form-item--inlined .form-item-input{order:1}.form-item.form-item--inlined .input-group{width:50%;margin-left:auto}.form-item.form-item--inlined .checkbox-container{display:flex;flex-direction:row;align-items:flex-start}.form-item.form-item--inlined .checkbox-container--shrink{flex-shrink:1!important}.form-item.form-item--inlined .checkbox-container .checkbox{flex-shrink:0}.form-item.form-item--inlined .label{align-items:center}.form-item .input-group-container{display:flex!important;flex-direction:row!important}.form-item .input-group-container .input-group{width:30%}.form-item .input-group-container .additional-dislaimer{display:flex;align-items:center;margin-left:.5rem;color:#00000080}.form-item--checkbox{align-items:center}.form-item--checkbox .form-item-label{order:2;margin-left:.75rem}.label{display:flex}.label .form-item-label .link{cursor:pointer;color:var(--color-link-primary);text-decoration:underline}input[type=date].form-item-input{display:inherit}.form-item-textarea{height:auto!important;padding:.5rem}.form-item-error{display:flex;font-size:12.5px;margin:.25rem 0}.form-item-error__label{display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:700}.form-item-error__icon{cursor:pointer;--fa-primary-color: var(--color-danger);--fa-secondary-color: var(--color-danger-tint75);--fa-primary-opacity: 1;--fa-secondary-opacity: 1}.form-item-error--checkbox{order:3}.help-text-icon{height:-moz-fit-content;height:fit-content;font-weight:700;text-align:center;vertical-align:middle;--fa-primary-color: var(--tooltip-indicator-text-color);--fa-secondary-color: var(--tooltip-indicator-color);--fa-primary-opacity: 1;--fa-secondary-opacity: 1}.input-group{display:flex;position:relative}.input-group--disabled{background-color:var(--input-background-disabled);color:var(--input-text-color-tint50)}.input-group__form-item-input{width:100%;border:none;background-color:transparent;color:var(--input-text-color)}.input-group__form-item-input:focus{outline:none}.input-group .input-group-addition{display:flex;align-items:center;justify-content:center;box-sizing:border-box;height:2.25rem;text-align:center;font-weight:700}.input-group .input-group-addition--prepend{margin-right:.5rem}.input-group .input-group-addition--append{margin-left:.5rem}.input-group .input-group-addition--inactive{color:var(--input-text-color-tint50)}.input-group .input-group-addition--inactive.--clickable{cursor:pointer}.input-group .input-group-addition--inactive.--clickable :active,.input-group .input-group-addition--active{color:var(--input-text-color)}.input-group .input-group-addition--active.--clickable{cursor:pointer}.input-group .input-group-addition--active.--clickable :active{color:var(--input-text-color-tint50)}input::-webkit-calendar-picker-indicator{display:none}.hiddenInput{position:absolute;top:2.5rem;left:0;opacity:0;width:0;height:0;padding:0;margin:0}.toggle-container{display:flex;flex-direction:row;align-items:center}.height-auto{height:auto!important}\n"],
                    encapsulation: 2
                }), c
            })();
            var ke = y(1871);
            const ze = function(c, g, o) {
                return {
                    alert__info: c,
                    alert__warn: g,
                    alert__error: o
                }
            };

            function b(c, g) {
                if (1 & c && (a.TgZ(0, "div", 4), a._UZ(1, "fa-icon", 5), a.qZA()), 2 & c) {
                    const o = a.oxw();
                    a.Q6J("ngClass", a.kEZ(3, ze, "info" === o.level, "warn" === o.level, "error" === o.level)), a.xp6(1), a.Q6J("icon", o.icon)("fixedWidth", !0)
                }
            }

            function Gt(c, g) {
                if (1 & c && (a.TgZ(0, "span"), a._uU(1), a.qZA()), 2 & c) {
                    const o = a.oxw();
                    a.xp6(1), a.hij("", o.amount, "\xa0")
                }
            }
            const Vt = function(c, g, o) {
                return {
                    alert__s: c,
                    alert__m: g,
                    alert__l: o
                }
            };
            let B = (() => {
                class c {
                    constructor() {
                        this.icon = v.eHv, this.level = "info", this.size = "m"
                    }
                }
                return c.\u0275fac = function(o) {
                    return new(o || c)
                }, c.\u0275cmp = a.Xpm({
                    type: c,
                    selectors: [
                        ["oper-client-alert"]
                    ],
                    inputs: {
                        icon: "icon",
                        level: "level",
                        size: "size",
                        amount: "amount",
                        translateKey: "translateKey",
                        translateParams: "translateParams"
                    },
                    decls: 8,
                    vars: 13,
                    consts: [
                        [1, "alert", 3, "ngClass"],
                        ["class", "icon", 3, "ngClass", 4, "ngIf"],
                        [1, "label"],
                        [4, "ngIf"],
                        [1, "icon", 3, "ngClass"],
                        [3, "icon", "fixedWidth"]
                    ],
                    template: function(o, l) {
                        1 & o && (a.TgZ(0, "div", 0), a.YNc(1, b, 2, 7, "div", 1), a.TgZ(2, "div", 2), a.YNc(3, Gt, 2, 1, "span", 3), a.TgZ(4, "span"), a._uU(5), a.ALo(6, "translate"), a.ALo(7, "translateParams"), a.qZA()()()), 2 & o && (a.Q6J("ngClass", a.kEZ(9, Vt, "s" === l.size, "m" === l.size, "l" === l.size)), a.xp6(1), a.Q6J("ngIf", l.icon), a.xp6(2), a.Q6J("ngIf", l.amount), a.xp6(2), a.Oqu(a.xi3(6, 4, l.translateKey, a.lcZ(7, 7, l.translateParams))))
                    },
                    directives: [D.mk, D.O5, Q.BN],
                    pipes: [I.X$, ke.b],
                    styles: ["[_nghost-%COMP%]{display:block;width:100%;margin-bottom:.5rem}[_nghost-%COMP%]:last-child{margin-bottom:0}.alert[_ngcontent-%COMP%]{display:flex;border-radius:.5rem;background-color:#f5f5f5;color:#000}.alert__s[_ngcontent-%COMP%]{padding:.5rem}.alert__m[_ngcontent-%COMP%]{padding:1rem}.alert__l[_ngcontent-%COMP%]{padding:1.5rem}.alert__warn[_ngcontent-%COMP%]{font-weight:700;color:#de6102}.alert__error[_ngcontent-%COMP%]{font-weight:700;color:#c00}.alert[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{margin-right:1rem;font-size:large}.alert[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-weight:700}"]
                }), c
            })();

            function Ke(c, g) {
                if (1 & c) {
                    const o = a.EpF();
                    a.TgZ(0, "oper-client-dynamic-form-question", 7), a.NdJ("valueChange", function() {
                        return a.CHM(o), a.oxw(3).valueChanged()
                    })("labelLinkClick", function() {
                        return a.CHM(o), a.oxw(3).labelLinkClick.emit()
                    }), a.qZA()
                }
                if (2 & c) {
                    const o = a.oxw().$implicit,
                        l = a.oxw(2);
                    a.Q6J("formId", l.formId)("form", l.form)("question", o)("numberOfQuestions", l.formConfiguration.formControl.questions.length)("debounceTime", l.debounceTime)("keydownDebounceExtension", l.keydownDebounceExtension)("markAsTouched", l.markAllAsTouched)("ngClass", o.key)
                }
            }

            function S(c, g) {
                if (1 & c && (a.TgZ(0, "div", 5), a.YNc(1, Ke, 1, 8, "oper-client-dynamic-form-question", 6), a.qZA()), 2 & c) {
                    const o = g.$implicit;
                    a.Q6J("ngClass", o.class), a.xp6(1), a.Q6J("ngIf", "space" !== o.controlType)
                }
            }

            function we(c, g) {
                if (1 & c && (a.ynx(0), a.YNc(1, S, 2, 2, "div", 4), a.BQk()), 2 & c) {
                    const o = a.oxw();
                    a.xp6(1), a.Q6J("ngForOf", o.formConfiguration.formControl.questions)
                }
            }

            function $t(c, g) {
                1 & c && a._UZ(0, "oper-client-alert", 8), 2 & c && a.Q6J("level", "warn")("translateKey", "\xe7.feature.dynamicForm.missingConfiguration")
            }
            let j = (() => {
                class c {
                    constructor(o, l) {
                        this.validatorService = o, this.formWarningService = l, this.errors = new a.vpe, this.warnings = new a.vpe, this.labelLinkClick = new a.vpe, this.valueChange = new a.vpe, this.formId = (0, f.p)(), this._formConfiguration = new K.E({
                            formConfiguration: {
                                questions: []
                            }
                        }), this.destroy$ = new z.xQ
                    }
                    get formConfiguration() {
                        return this._formConfiguration
                    }
                    set formConfiguration(o) {
                        this._formConfiguration = o, this.initFormGroup(o), this._markAllAsTouched && this.form.markAllAsTouched(), this.valueChange.emit(this.form), this.getErrors(), this.getWarnings()
                    }
                    set markAllAsTouched(o) {
                        this._markAllAsTouched = o, o && this.form.markAllAsTouched()
                    }
                    get markAllAsTouched() {
                        return this._markAllAsTouched
                    }
                    ngOnDestroy() {
                        this.destroy$.next(), this.destroy$.complete()
                    }
                    getErrors() {
                        if (this.form.errors) {
                            const o = this.validatorService.formatValidationErrors(this.form.errors);
                            this.errors.emit(o)
                        } else this.errors.emit([])
                    }
                    getWarnings() {
                        if (this.form.warnings) {
                            const o = this.formWarningService.formatWarnings(this.form.warnings);
                            this.warnings.emit(o)
                        } else this.warnings.emit([])
                    }
                    initFormGroup(o) {
                        const l = {};
                        o?.formControl?.questions && o.formControl.questions.forEach(L => {
                            "space" !== L.controlType && (l[L.key] = new p.NI({
                                value: this.getInitValue(L),
                                disabled: !!L.disabled
                            }, {
                                validators: L.validators,
                                asyncValidators: L.asyncValidator,
                                updateOn: L.updateOn
                            }))
                        });
                        const q = new O(l, {
                            validators: o?.formGroup?.validators || [],
                            asyncValidators: o?.formGroup?.asyncValidators || []
                        });
                        this.form = q, o?.formControl?.questions && o.formControl.questions.forEach(L => {
                            if (L.hidden) {
                                const et = L.type;
                                L.hidden(q).pipe((0, ne.o)(() => this.form === q), (0, N.R)(this.destroy$)).subscribe(A => {
                                    A ? (L.type = "hidden", l[L.key].disable()) : (L.type = et, l[L.key].enable())
                                })
                            }
                        })
                    }
                    getInitValue(o) {
                        if (!o.value) switch (o.controlType) {
                            case "field":
                                return "checkbox" !== o.type && (o.currency || "number" === o.type && 0 === o.value ? o.value : "");
                            case "select":
                                return "boolean" == typeof o.value ? o.value : null;
                            case "switch":
                                return typeof o.value > "u" || null === o.value ? o.valueA : o.value;
                            default:
                                return
                        }
                        return o.value
                    }
                    valueChanged() {
                        this.valueChange.emit(this.form), this.getErrors(), this.getWarnings()
                    }
                }
                return c.\u0275fac = function(o) {
                    return new(o || c)(a.Y36(T.o), a.Y36(H))
                }, c.\u0275cmp = a.Xpm({
                    type: c,
                    selectors: [
                        ["oper-client-dynamic-form"]
                    ],
                    inputs: {
                        formConfiguration: "formConfiguration",
                        markAllAsTouched: "markAllAsTouched",
                        debounceTime: "debounceTime",
                        keydownDebounceExtension: "keydownDebounceExtension"
                    },
                    outputs: {
                        errors: "errors",
                        warnings: "warnings",
                        labelLinkClick: "labelLinkClick",
                        valueChange: "valueChange"
                    },
                    decls: 4,
                    vars: 3,
                    consts: [
                        [3, "formGroup"],
                        [1, "containerFormField"],
                        [4, "ngIf"],
                        [3, "level", "translateKey", 4, "ngIf"],
                        ["class", "form-question", 3, "ngClass", 4, "ngFor", "ngForOf"],
                        [1, "form-question", 3, "ngClass"],
                        ["class", "form-question--internals", 3, "formId", "form", "question", "numberOfQuestions", "debounceTime", "keydownDebounceExtension", "markAsTouched", "ngClass", "valueChange", "labelLinkClick", 4, "ngIf"],
                        [1, "form-question--internals", 3, "formId", "form", "question", "numberOfQuestions", "debounceTime", "keydownDebounceExtension", "markAsTouched", "ngClass", "valueChange", "labelLinkClick"],
                        [3, "level", "translateKey"]
                    ],
                    template: function(o, l) {
                        1 & o && (a.TgZ(0, "form", 0)(1, "div", 1), a.YNc(2, we, 2, 1, "ng-container", 2), a.YNc(3, $t, 1, 2, "oper-client-alert", 3), a.qZA()()), 2 & o && (a.Q6J("formGroup", l.form), a.xp6(2), a.Q6J("ngIf", l.formConfiguration), a.xp6(1), a.Q6J("ngIf", 0 === (null == l.formConfiguration || null == l.formConfiguration.formControl || null == l.formConfiguration.formControl.questions ? null : l.formConfiguration.formControl.questions.length)))
                    },
                    directives: [p._Y, p.JL, p.sg, D.O5, D.sg, D.mk, Ut, B],
                    styles: [".containerFormField[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin:0;text-align:left;margin:0 -.5rem}.containerFormField[_ngcontent-%COMP%]   .form-question[_ngcontent-%COMP%]{display:flex;padding:0 .5rem;flex-direction:column-reverse}.containerFormField[_ngcontent-%COMP%]   .form-question[_ngcontent-%COMP%]   .form-question--internals[_ngcontent-%COMP%]{margin:0}"]
                }), c
            })()
        },
        6908: function(ae, de, y) {
            (ae = y.nmd(ae)).exports = function() {
                "use strict";
                var a, Te;

                function p() {
                    return a.apply(null, arguments)
                }

                function N(e) {
                    return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
                }

                function z(e) {
                    return null != e && "[object Object]" === Object.prototype.toString.call(e)
                }

                function f(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }

                function K(e) {
                    if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;
                    var t;
                    for (t in e)
                        if (f(e, t)) return !1;
                    return !0
                }

                function O(e) {
                    return void 0 === e
                }

                function T(e) {
                    return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
                }

                function I(e) {
                    return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
                }

                function H(e, t) {
                    var r, n = [],
                        i = e.length;
                    for (r = 0; r < i; ++r) n.push(t(e[r], r));
                    return n
                }

                function D(e, t) {
                    for (var n in t) f(t, n) && (e[n] = t[n]);
                    return f(t, "toString") && (e.toString = t.toString), f(t, "valueOf") && (e.valueOf = t.valueOf), e
                }

                function E(e, t, n, r) {
                    return Oa(e, t, n, r, !0).utc()
                }

                function v(e) {
                    return null == e._pf && (e._pf = {
                        empty: !1,
                        unusedTokens: [],
                        unusedInput: [],
                        overflow: -2,
                        charsLeftOver: 0,
                        nullInput: !1,
                        invalidEra: null,
                        invalidMonth: null,
                        invalidFormat: !1,
                        userInvalidated: !1,
                        iso: !1,
                        parsedDateParts: [],
                        era: null,
                        meridiem: null,
                        rfc2822: !1,
                        weekdayMismatch: !1
                    }), e._pf
                }

                function He(e) {
                    if (null == e._isValid) {
                        var t = v(e),
                            n = Te.call(t.parsedDateParts, function(i) {
                                return null != i
                            }),
                            r = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
                        if (e._strict && (r = r && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return r;
                        e._isValid = r
                    }
                    return e._isValid
                }

                function Se(e) {
                    var t = E(NaN);
                    return null != e ? D(v(t), e) : v(t).userInvalidated = !0, t
                }
                Te = Array.prototype.some ? Array.prototype.some : function(e) {
                    var r, t = Object(this),
                        n = t.length >>> 0;
                    for (r = 0; r < n; r++)
                        if (r in t && e.call(this, t[r], r, t)) return !0;
                    return !1
                };
                var lt = p.momentProperties = [],
                    _e = !1;

                function qe(e, t) {
                    var n, r, i, s = lt.length;
                    if (O(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), O(t._i) || (e._i = t._i), O(t._f) || (e._f = t._f), O(t._l) || (e._l = t._l), O(t._strict) || (e._strict = t._strict), O(t._tzm) || (e._tzm = t._tzm), O(t._isUTC) || (e._isUTC = t._isUTC), O(t._offset) || (e._offset = t._offset), O(t._pf) || (e._pf = v(t)), O(t._locale) || (e._locale = t._locale), s > 0)
                        for (n = 0; n < s; n++) O(i = t[r = lt[n]]) || (e[r] = i);
                    return e
                }

                function me(e) {
                    qe(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === _e && (_e = !0, p.updateOffset(this), _e = !1)
                }

                function $(e) {
                    return e instanceof me || null != e && null != e._isAMomentObject
                }

                function st(e) {
                    !1 === p.suppressDeprecationWarnings && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e)
                }

                function Q(e, t) {
                    var n = !0;
                    return D(function() {
                        if (null != p.deprecationHandler && p.deprecationHandler(null, e), n) {
                            var i, s, m, r = [],
                                x = arguments.length;
                            for (s = 0; s < x; s++) {
                                if (i = "", "object" == typeof arguments[s]) {
                                    for (m in i += "\n[" + s + "] ", arguments[0]) f(arguments[0], m) && (i += m + ": " + arguments[0][m] + ", ");
                                    i = i.slice(0, -2)
                                } else i = arguments[s];
                                r.push(i)
                            }
                            st(e + "\nArguments: " + Array.prototype.slice.call(r).join("") + "\n" + (new Error).stack), n = !1
                        }
                        return t.apply(this, arguments)
                    }, t)
                }
                var Ge, ct = {};

                function Je(e, t) {
                    null != p.deprecationHandler && p.deprecationHandler(e, t), ct[e] || (st(t), ct[e] = !0)
                }

                function X(e) {
                    return typeof Function < "u" && e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
                }

                function Be(e, t) {
                    var r, n = D({}, e);
                    for (r in t) f(t, r) && (z(e[r]) && z(t[r]) ? (n[r] = {}, D(n[r], e[r]), D(n[r], t[r])) : null != t[r] ? n[r] = t[r] : delete n[r]);
                    for (r in e) f(e, r) && !f(t, r) && z(e[r]) && (n[r] = D({}, n[r]));
                    return n
                }

                function Ue(e) {
                    null != e && this.set(e)
                }
                p.suppressDeprecationWarnings = !1, p.deprecationHandler = null, Ge = Object.keys ? Object.keys : function(e) {
                    var t, n = [];
                    for (t in e) f(e, t) && n.push(t);
                    return n
                };

                function ee(e, t, n) {
                    var r = "" + Math.abs(e);
                    return (e >= 0 ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, t - r.length)).toString().substr(1) + r
                }
                var xe = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
                    Ne = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
                    Ve = {},
                    pe = {};

                function _(e, t, n, r) {
                    var i = r;
                    "string" == typeof r && (i = function() {
                        return this[r]()
                    }), e && (pe[e] = i), t && (pe[t[0]] = function() {
                        return ee(i.apply(this, arguments), t[1], t[2])
                    }), n && (pe[n] = function() {
                        return this.localeData().ordinal(i.apply(this, arguments), e)
                    })
                }

                function Yt(e) {
                    return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
                }

                function Oe(e, t) {
                    return e.isValid() ? (t = dt(t, e.localeData()), Ve[t] = Ve[t] || function Pt(e) {
                        var n, r, t = e.match(xe);
                        for (n = 0, r = t.length; n < r; n++) t[n] = pe[t[n]] ? pe[t[n]] : Yt(t[n]);
                        return function(i) {
                            var m, s = "";
                            for (m = 0; m < r; m++) s += X(t[m]) ? t[m].call(i, e) : t[m];
                            return s
                        }
                    }(t), Ve[t](e)) : e.localeData().invalidDate()
                }

                function dt(e, t) {
                    var n = 5;

                    function r(i) {
                        return t.longDateFormat(i) || i
                    }
                    for (Ne.lastIndex = 0; n >= 0 && Ne.test(e);) e = e.replace(Ne, r), Ne.lastIndex = 0, n -= 1;
                    return e
                }
                var ye = {};

                function W(e, t) {
                    var n = e.toLowerCase();
                    ye[n] = ye[n + "s"] = ye[t] = e
                }

                function G(e) {
                    return "string" == typeof e ? ye[e] || ye[e.toLowerCase()] : void 0
                }

                function ve(e) {
                    var n, r, t = {};
                    for (r in e) f(e, r) && (n = G(r)) && (t[n] = e[r]);
                    return t
                }
                var mt = {};

                function R(e, t) {
                    mt[e] = t
                }

                function Ie(e) {
                    return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
                }

                function V(e) {
                    return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
                }

                function k(e) {
                    var t = +e,
                        n = 0;
                    return 0 !== t && isFinite(t) && (n = V(t)), n
                }

                function ue(e, t) {
                    return function(n) {
                        return null != n ? (pt(this, e, n), p.updateOffset(this, t), this) : Ye(this, e)
                    }
                }

                function Ye(e, t) {
                    return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
                }

                function pt(e, t, n) {
                    e.isValid() && !isNaN(n) && ("FullYear" === t && Ie(e.year()) && 1 === e.month() && 29 === e.date() ? (n = k(n), e._d["set" + (e._isUTC ? "UTC" : "") + t](n, e.month(), ht(n, e.month()))) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n))
                }
                var ze, ut = /\d/,
                    J = /\d\d/,
                    gt = /\d{3}/,
                    $e = /\d{4}/,
                    Pe = /[+-]?\d{6}/,
                    P = /\d\d?/,
                    bt = /\d\d\d\d?/,
                    ft = /\d\d\d\d\d\d?/,
                    Le = /\d{1,3}/,
                    Xe = /\d{1,4}/,
                    Ae = /[+-]?\d{1,6}/,
                    ge = /\d+/,
                    Ze = /[+-]?\d+/,
                    Bt = /Z|[+-]\d\d:?\d\d/gi,
                    Fe = /Z|[+-]\d\d(?::?\d\d)?/gi,
                    ke = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;

                function b(e, t, n) {
                    ze[e] = X(t) ? t : function(r, i) {
                        return r && n ? n : t
                    }
                }

                function Gt(e, t) {
                    return f(ze, e) ? ze[e](t._strict, t._locale) : new RegExp(function Vt(e) {
                        return B(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(t, n, r, i, s) {
                            return n || r || i || s
                        }))
                    }(e))
                }

                function B(e) {
                    return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
                }
                ze = {};
                var Ke = {};

                function S(e, t) {
                    var n, i, r = t;
                    for ("string" == typeof e && (e = [e]), T(t) && (r = function(s, m) {
                            m[t] = k(s)
                        }), i = e.length, n = 0; n < i; n++) Ke[e[n]] = r
                }

                function we(e, t) {
                    S(e, function(n, r, i, s) {
                        i._w = i._w || {}, t(n, i._w, i, s)
                    })
                }

                function $t(e, t, n) {
                    null != t && f(Ke, e) && Ke[e](t, n._a, n, e)
                }
                var A;

                function ht(e, t) {
                    if (isNaN(e) || isNaN(t)) return NaN;
                    var n = function et(e, t) {
                        return (e % t + t) % t
                    }(t, 12);
                    return e += (t - n) / 12, 1 === n ? Ie(e) ? 29 : 28 : 31 - n % 7 % 2
                }
                A = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) {
                    var t;
                    for (t = 0; t < this.length; ++t)
                        if (this[t] === e) return t;
                    return -1
                }, _("M", ["MM", 2], "Mo", function() {
                    return this.month() + 1
                }), _("MMM", 0, 0, function(e) {
                    return this.localeData().monthsShort(this, e)
                }), _("MMMM", 0, 0, function(e) {
                    return this.localeData().months(this, e)
                }), W("month", "M"), R("month", 8), b("M", P), b("MM", P, J), b("MMM", function(e, t) {
                    return t.monthsShortRegex(e)
                }), b("MMMM", function(e, t) {
                    return t.monthsRegex(e)
                }), S(["M", "MM"], function(e, t) {
                    t[1] = k(e) - 1
                }), S(["MMM", "MMMM"], function(e, t, n, r) {
                    var i = n._locale.monthsParse(e, r, n._strict);
                    null != i ? t[1] = i : v(n).invalidMonth = e
                });
                var Xa = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                    ba = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                    fa = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
                    Ka = ke,
                    en = ke;

                function nn(e, t, n) {
                    var r, i, s, m = e.toLocaleLowerCase();
                    if (!this._monthsParse)
                        for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; r < 12; ++r) s = E([2e3, r]), this._shortMonthsParse[r] = this.monthsShort(s, "").toLocaleLowerCase(), this._longMonthsParse[r] = this.months(s, "").toLocaleLowerCase();
                    return n ? "MMM" === t ? -1 !== (i = A.call(this._shortMonthsParse, m)) ? i : null : -1 !== (i = A.call(this._longMonthsParse, m)) ? i : null : "MMM" === t ? -1 !== (i = A.call(this._shortMonthsParse, m)) || -1 !== (i = A.call(this._longMonthsParse, m)) ? i : null : -1 !== (i = A.call(this._longMonthsParse, m)) || -1 !== (i = A.call(this._shortMonthsParse, m)) ? i : null
                }

                function ha(e, t) {
                    var n;
                    if (!e.isValid()) return e;
                    if ("string" == typeof t)
                        if (/^\d+$/.test(t)) t = k(t);
                        else if (!T(t = e.localeData().monthsParse(t))) return e;
                    return n = Math.min(e.date(), ht(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e
                }

                function _a(e) {
                    return null != e ? (ha(this, e), p.updateOffset(this, !0), this) : Ye(this, "Month")
                }

                function xa() {
                    function e(m, x) {
                        return x.length - m.length
                    }
                    var i, s, t = [],
                        n = [],
                        r = [];
                    for (i = 0; i < 12; i++) s = E([2e3, i]), t.push(this.monthsShort(s, "")), n.push(this.months(s, "")), r.push(this.months(s, "")), r.push(this.monthsShort(s, ""));
                    for (t.sort(e), n.sort(e), r.sort(e), i = 0; i < 12; i++) t[i] = B(t[i]), n[i] = B(n[i]);
                    for (i = 0; i < 24; i++) r[i] = B(r[i]);
                    this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + t.join("|") + ")", "i")
                }

                function tt(e) {
                    return Ie(e) ? 366 : 365
                }
                _("Y", 0, 0, function() {
                    var e = this.year();
                    return e <= 9999 ? ee(e, 4) : "+" + e
                }), _(0, ["YY", 2], 0, function() {
                    return this.year() % 100
                }), _(0, ["YYYY", 4], 0, "year"), _(0, ["YYYYY", 5], 0, "year"), _(0, ["YYYYYY", 6, !0], 0, "year"), W("year", "y"), R("year", 1), b("Y", Ze), b("YY", P, J), b("YYYY", Xe, $e), b("YYYYY", Ae, Pe), b("YYYYYY", Ae, Pe), S(["YYYYY", "YYYYYY"], 0), S("YYYY", function(e, t) {
                    t[0] = 2 === e.length ? p.parseTwoDigitYear(e) : k(e)
                }), S("YY", function(e, t) {
                    t[0] = p.parseTwoDigitYear(e)
                }), S("Y", function(e, t) {
                    t[0] = parseInt(e, 10)
                }), p.parseTwoDigitYear = function(e) {
                    return k(e) + (k(e) > 68 ? 1900 : 2e3)
                };
                var ya = ue("FullYear", !0);

                function dn(e, t, n, r, i, s, m) {
                    var x;
                    return e < 100 && e >= 0 ? (x = new Date(e + 400, t, n, r, i, s, m), isFinite(x.getFullYear()) && x.setFullYear(e)) : x = new Date(e, t, n, r, i, s, m), x
                }

                function at(e) {
                    var t, n;
                    return e < 100 && e >= 0 ? ((n = Array.prototype.slice.call(arguments))[0] = e + 400, t = new Date(Date.UTC.apply(null, n)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t
                }

                function _t(e, t, n) {
                    var r = 7 + t - n;
                    return -(7 + at(e, 0, r).getUTCDay() - t) % 7 + r - 1
                }

                function va(e, t, n, r, i) {
                    var w, Y, x = 1 + 7 * (t - 1) + (7 + n - r) % 7 + _t(e, r, i);
                    return x <= 0 ? Y = tt(w = e - 1) + x : x > tt(e) ? (w = e + 1, Y = x - tt(e)) : (w = e, Y = x), {
                        year: w,
                        dayOfYear: Y
                    }
                }

                function nt(e, t, n) {
                    var s, m, r = _t(e.year(), t, n),
                        i = Math.floor((e.dayOfYear() - r - 1) / 7) + 1;
                    return i < 1 ? s = i + oe(m = e.year() - 1, t, n) : i > oe(e.year(), t, n) ? (s = i - oe(e.year(), t, n), m = e.year() + 1) : (m = e.year(), s = i), {
                        week: s,
                        year: m
                    }
                }

                function oe(e, t, n) {
                    var r = _t(e, t, n),
                        i = _t(e + 1, t, n);
                    return (tt(e) - r + i) / 7
                }
                _("w", ["ww", 2], "wo", "week"), _("W", ["WW", 2], "Wo", "isoWeek"), W("week", "w"), W("isoWeek", "W"), R("week", 5), R("isoWeek", 5), b("w", P), b("ww", P, J), b("W", P), b("WW", P, J), we(["w", "ww", "W", "WW"], function(e, t, n, r) {
                    t[r.substr(0, 1)] = k(e)
                });

                function Xt(e, t) {
                    return e.slice(t, 7).concat(e.slice(0, t))
                }
                _("d", 0, "do", "day"), _("dd", 0, 0, function(e) {
                    return this.localeData().weekdaysMin(this, e)
                }), _("ddd", 0, 0, function(e) {
                    return this.localeData().weekdaysShort(this, e)
                }), _("dddd", 0, 0, function(e) {
                    return this.localeData().weekdays(this, e)
                }), _("e", 0, 0, "weekday"), _("E", 0, 0, "isoWeekday"), W("day", "d"), W("weekday", "e"), W("isoWeekday", "E"), R("day", 11), R("weekday", 11), R("isoWeekday", 11), b("d", P), b("e", P), b("E", P), b("dd", function(e, t) {
                    return t.weekdaysMinRegex(e)
                }), b("ddd", function(e, t) {
                    return t.weekdaysShortRegex(e)
                }), b("dddd", function(e, t) {
                    return t.weekdaysRegex(e)
                }), we(["dd", "ddd", "dddd"], function(e, t, n, r) {
                    var i = n._locale.weekdaysParse(e, r, n._strict);
                    null != i ? t.d = i : v(n).invalidWeekday = e
                }), we(["d", "e", "E"], function(e, t, n, r) {
                    t[r] = k(e)
                });
                var xn = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                    ka = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                    yn = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                    vn = ke,
                    kn = ke,
                    wn = ke;

                function Sn(e, t, n) {
                    var r, i, s, m = e.toLocaleLowerCase();
                    if (!this._weekdaysParse)
                        for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], r = 0; r < 7; ++r) s = E([2e3, 1]).day(r), this._minWeekdaysParse[r] = this.weekdaysMin(s, "").toLocaleLowerCase(), this._shortWeekdaysParse[r] = this.weekdaysShort(s, "").toLocaleLowerCase(), this._weekdaysParse[r] = this.weekdays(s, "").toLocaleLowerCase();
                    return n ? "dddd" === t ? -1 !== (i = A.call(this._weekdaysParse, m)) ? i : null : "ddd" === t ? -1 !== (i = A.call(this._shortWeekdaysParse, m)) ? i : null : -1 !== (i = A.call(this._minWeekdaysParse, m)) ? i : null : "dddd" === t ? -1 !== (i = A.call(this._weekdaysParse, m)) || -1 !== (i = A.call(this._shortWeekdaysParse, m)) || -1 !== (i = A.call(this._minWeekdaysParse, m)) ? i : null : "ddd" === t ? -1 !== (i = A.call(this._shortWeekdaysParse, m)) || -1 !== (i = A.call(this._weekdaysParse, m)) || -1 !== (i = A.call(this._minWeekdaysParse, m)) ? i : null : -1 !== (i = A.call(this._minWeekdaysParse, m)) || -1 !== (i = A.call(this._weekdaysParse, m)) || -1 !== (i = A.call(this._shortWeekdaysParse, m)) ? i : null
                }

                function Kt() {
                    function e(U, ce) {
                        return ce.length - U.length
                    }
                    var s, m, x, w, Y, t = [],
                        n = [],
                        r = [],
                        i = [];
                    for (s = 0; s < 7; s++) m = E([2e3, 1]).day(s), x = B(this.weekdaysMin(m, "")), w = B(this.weekdaysShort(m, "")), Y = B(this.weekdays(m, "")), t.push(x), n.push(w), r.push(Y), i.push(x), i.push(w), i.push(Y);
                    t.sort(e), n.sort(e), r.sort(e), i.sort(e), this._weekdaysRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + t.join("|") + ")", "i")
                }

                function ea() {
                    return this.hours() % 12 || 12
                }

                function wa(e, t) {
                    _(e, 0, 0, function() {
                        return this.localeData().meridiem(this.hours(), this.minutes(), t)
                    })
                }

                function Ca(e, t) {
                    return t._meridiemParse
                }
                _("H", ["HH", 2], 0, "hour"), _("h", ["hh", 2], 0, ea), _("k", ["kk", 2], 0, function An() {
                    return this.hours() || 24
                }), _("hmm", 0, 0, function() {
                    return "" + ea.apply(this) + ee(this.minutes(), 2)
                }), _("hmmss", 0, 0, function() {
                    return "" + ea.apply(this) + ee(this.minutes(), 2) + ee(this.seconds(), 2)
                }), _("Hmm", 0, 0, function() {
                    return "" + this.hours() + ee(this.minutes(), 2)
                }), _("Hmmss", 0, 0, function() {
                    return "" + this.hours() + ee(this.minutes(), 2) + ee(this.seconds(), 2)
                }), wa("a", !0), wa("A", !1), W("hour", "h"), R("hour", 13), b("a", Ca), b("A", Ca), b("H", P), b("h", P), b("k", P), b("HH", P, J), b("hh", P, J), b("kk", P, J), b("hmm", bt), b("hmmss", ft), b("Hmm", bt), b("Hmmss", ft), S(["H", "HH"], 3), S(["k", "kk"], function(e, t, n) {
                    var r = k(e);
                    t[3] = 24 === r ? 0 : r
                }), S(["a", "A"], function(e, t, n) {
                    n._isPm = n._locale.isPM(e), n._meridiem = e
                }), S(["h", "hh"], function(e, t, n) {
                    t[3] = k(e), v(n).bigHour = !0
                }), S("hmm", function(e, t, n) {
                    var r = e.length - 2;
                    t[3] = k(e.substr(0, r)), t[4] = k(e.substr(r)), v(n).bigHour = !0
                }), S("hmmss", function(e, t, n) {
                    var r = e.length - 4,
                        i = e.length - 2;
                    t[3] = k(e.substr(0, r)), t[4] = k(e.substr(r, 2)), t[5] = k(e.substr(i)), v(n).bigHour = !0
                }), S("Hmm", function(e, t, n) {
                    var r = e.length - 2;
                    t[3] = k(e.substr(0, r)), t[4] = k(e.substr(r))
                }), S("Hmmss", function(e, t, n) {
                    var r = e.length - 4,
                        i = e.length - 2;
                    t[3] = k(e.substr(0, r)), t[4] = k(e.substr(r, 2)), t[5] = k(e.substr(i))
                });
                var zn = ue("Hours", !0);
                var rt, Ma = {
                        calendar: {
                            sameDay: "[Today at] LT",
                            nextDay: "[Tomorrow at] LT",
                            nextWeek: "dddd [at] LT",
                            lastDay: "[Yesterday at] LT",
                            lastWeek: "[Last] dddd [at] LT",
                            sameElse: "L"
                        },
                        longDateFormat: {
                            LTS: "h:mm:ss A",
                            LT: "h:mm A",
                            L: "MM/DD/YYYY",
                            LL: "MMMM D, YYYY",
                            LLL: "MMMM D, YYYY h:mm A",
                            LLLL: "dddd, MMMM D, YYYY h:mm A"
                        },
                        invalidDate: "Invalid date",
                        ordinal: "%d",
                        dayOfMonthOrdinalParse: /\d{1,2}/,
                        relativeTime: {
                            future: "in %s",
                            past: "%s ago",
                            s: "a few seconds",
                            ss: "%d seconds",
                            m: "a minute",
                            mm: "%d minutes",
                            h: "an hour",
                            hh: "%d hours",
                            d: "a day",
                            dd: "%d days",
                            w: "a week",
                            ww: "%d weeks",
                            M: "a month",
                            MM: "%d months",
                            y: "a year",
                            yy: "%d years"
                        },
                        months: Xa,
                        monthsShort: ba,
                        week: {
                            dow: 0,
                            doy: 6
                        },
                        weekdays: xn,
                        weekdaysMin: yn,
                        weekdaysShort: ka,
                        meridiemParse: /[ap]\.?m?\.?/i
                    },
                    F = {},
                    ot = {};

                function Rn(e, t) {
                    var n, r = Math.min(e.length, t.length);
                    for (n = 0; n < r; n += 1)
                        if (e[n] !== t[n]) return n;
                    return r
                }

                function Ta(e) {
                    return e && e.toLowerCase().replace("_", "-")
                }

                function xt(e) {
                    var t = null;
                    if (void 0 === F[e] && ae && ae.exports && function En(e) {
                            return null != e.match("^[^/\\\\]*$")
                        }(e)) try {
                        t = rt._abbr, Object(function() {
                            var i = new Error("Cannot find module 'undefined'");
                            throw i.code = "MODULE_NOT_FOUND", i
                        }()), be(t)
                    } catch {
                        F[e] = null
                    }
                    return F[e]
                }

                function be(e, t) {
                    var n;
                    return e && ((n = O(t) ? re(e) : ta(e, t)) ? rt = n : typeof console < "u" && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")), rt._abbr
                }

                function ta(e, t) {
                    if (null !== t) {
                        var n, r = Ma;
                        if (t.abbr = e, null != F[e]) Je("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), r = F[e]._config;
                        else if (null != t.parentLocale)
                            if (null != F[t.parentLocale]) r = F[t.parentLocale]._config;
                            else {
                                if (null == (n = xt(t.parentLocale))) return ot[t.parentLocale] || (ot[t.parentLocale] = []), ot[t.parentLocale].push({
                                    name: e,
                                    config: t
                                }), null;
                                r = n._config
                            } return F[e] = new Ue(Be(r, t)), ot[e] && ot[e].forEach(function(i) {
                            ta(i.name, i.config)
                        }), be(e), F[e]
                    }
                    return delete F[e], null
                }

                function re(e) {
                    var t;
                    if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return rt;
                    if (!N(e)) {
                        if (t = xt(e)) return t;
                        e = [e]
                    }
                    return function jn(e) {
                        for (var n, r, i, s, t = 0; t < e.length;) {
                            for (n = (s = Ta(e[t]).split("-")).length, r = (r = Ta(e[t + 1])) ? r.split("-") : null; n > 0;) {
                                if (i = xt(s.slice(0, n).join("-"))) return i;
                                if (r && r.length >= n && Rn(s, r) >= n - 1) break;
                                n--
                            }
                            t++
                        }
                        return rt
                    }(e)
                }

                function aa(e) {
                    var t, n = e._a;
                    return n && -2 === v(e).overflow && (t = n[1] < 0 || n[1] > 11 ? 1 : n[2] < 1 || n[2] > ht(n[0], n[1]) ? 2 : n[3] < 0 || n[3] > 24 || 24 === n[3] && (0 !== n[4] || 0 !== n[5] || 0 !== n[6]) ? 3 : n[4] < 0 || n[4] > 59 ? 4 : n[5] < 0 || n[5] > 59 ? 5 : n[6] < 0 || n[6] > 999 ? 6 : -1, v(e)._overflowDayOfYear && (t < 0 || t > 2) && (t = 2), v(e)._overflowWeeks && -1 === t && (t = 7), v(e)._overflowWeekday && -1 === t && (t = 8), v(e).overflow = t), e
                }
                var qn = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                    Jn = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                    Bn = /Z|[+-]\d\d(?::?\d\d)?/,
                    yt = [
                        ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
                        ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
                        ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
                        ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
                        ["YYYY-DDD", /\d{4}-\d{3}/],
                        ["YYYY-MM", /\d{4}-\d\d/, !1],
                        ["YYYYYYMMDD", /[+-]\d{10}/],
                        ["YYYYMMDD", /\d{8}/],
                        ["GGGG[W]WWE", /\d{4}W\d{3}/],
                        ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
                        ["YYYYDDD", /\d{7}/],
                        ["YYYYMM", /\d{6}/, !1],
                        ["YYYY", /\d{4}/, !1]
                    ],
                    na = [
                        ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
                        ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
                        ["HH:mm:ss", /\d\d:\d\d:\d\d/],
                        ["HH:mm", /\d\d:\d\d/],
                        ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
                        ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
                        ["HHmmss", /\d\d\d\d\d\d/],
                        ["HHmm", /\d\d\d\d/],
                        ["HH", /\d\d/]
                    ],
                    Un = /^\/?Date\((-?\d+)/i,
                    Gn = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
                    Vn = {
                        UT: 0,
                        GMT: 0,
                        EDT: -240,
                        EST: -300,
                        CDT: -300,
                        CST: -360,
                        MDT: -360,
                        MST: -420,
                        PDT: -420,
                        PST: -480
                    };

                function Sa(e) {
                    var t, n, s, m, x, w, r = e._i,
                        i = qn.exec(r) || Jn.exec(r),
                        Y = yt.length,
                        U = na.length;
                    if (i) {
                        for (v(e).iso = !0, t = 0, n = Y; t < n; t++)
                            if (yt[t][1].exec(i[1])) {
                                m = yt[t][0], s = !1 !== yt[t][2];
                                break
                            } if (null == m) return void(e._isValid = !1);
                        if (i[3]) {
                            for (t = 0, n = U; t < n; t++)
                                if (na[t][1].exec(i[3])) {
                                    x = (i[2] || " ") + na[t][0];
                                    break
                                } if (null == x) return void(e._isValid = !1)
                        }
                        if (!s && null != x) return void(e._isValid = !1);
                        if (i[4]) {
                            if (!Bn.exec(i[4])) return void(e._isValid = !1);
                            w = "Z"
                        }
                        e._f = m + (x || "") + (w || ""), ra(e)
                    } else e._isValid = !1
                }

                function Xn(e) {
                    var t = parseInt(e, 10);
                    return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t
                }

                function Da(e) {
                    var n, t = Gn.exec(function Kn(e) {
                        return e.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
                    }(e._i));
                    if (t) {
                        if (n = function $n(e, t, n, r, i, s) {
                                var m = [Xn(e), ba.indexOf(t), parseInt(n, 10), parseInt(r, 10), parseInt(i, 10)];
                                return s && m.push(parseInt(s, 10)), m
                            }(t[4], t[3], t[2], t[5], t[6], t[7]), ! function eo(e, t, n) {
                                return !e || ka.indexOf(e) === new Date(t[0], t[1], t[2]).getDay() || (v(n).weekdayMismatch = !0, n._isValid = !1, !1)
                            }(t[1], n, e)) return;
                        e._a = n, e._tzm = function to(e, t, n) {
                            if (e) return Vn[e];
                            if (t) return 0;
                            var r = parseInt(n, 10),
                                i = r % 100;
                            return (r - i) / 100 * 60 + i
                        }(t[8], t[9], t[10]), e._d = at.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), v(e).rfc2822 = !0
                    } else e._isValid = !1
                }

                function We(e, t, n) {
                    return e ?? t ?? n
                }

                function oa(e) {
                    var t, n, i, s, m, r = [];
                    if (!e._d) {
                        for (i = function no(e) {
                                var t = new Date(p.now());
                                return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
                            }(e), e._w && null == e._a[2] && null == e._a[1] && function oo(e) {
                                var t, n, r, i, s, m, x, w, Y;
                                null != (t = e._w).GG || null != t.W || null != t.E ? (s = 1, m = 4, n = We(t.GG, e._a[0], nt(Z(), 1, 4).year), r = We(t.W, 1), ((i = We(t.E, 1)) < 1 || i > 7) && (w = !0)) : (s = e._locale._week.dow, m = e._locale._week.doy, Y = nt(Z(), s, m), n = We(t.gg, e._a[0], Y.year), r = We(t.w, Y.week), null != t.d ? ((i = t.d) < 0 || i > 6) && (w = !0) : null != t.e ? (i = t.e + s, (t.e < 0 || t.e > 6) && (w = !0)) : i = s), r < 1 || r > oe(n, s, m) ? v(e)._overflowWeeks = !0 : null != w ? v(e)._overflowWeekday = !0 : (x = va(n, r, i, s, m), e._a[0] = x.year, e._dayOfYear = x.dayOfYear)
                            }(e), null != e._dayOfYear && (m = We(e._a[0], i[0]), (e._dayOfYear > tt(m) || 0 === e._dayOfYear) && (v(e)._overflowDayOfYear = !0), n = at(m, 0, e._dayOfYear), e._a[1] = n.getUTCMonth(), e._a[2] = n.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = r[t] = i[t];
                        for (; t < 7; t++) e._a[t] = r[t] = e._a[t] ?? (2 === t ? 1 : 0);
                        24 === e._a[3] && 0 === e._a[4] && 0 === e._a[5] && 0 === e._a[6] && (e._nextDay = !0, e._a[3] = 0), e._d = (e._useUTC ? at : dn).apply(null, r), s = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[3] = 24), e._w && typeof e._w.d < "u" && e._w.d !== s && (v(e).weekdayMismatch = !0)
                    }
                }

                function ra(e) {
                    if (e._f !== p.ISO_8601)
                        if (e._f !== p.RFC_2822) {
                            e._a = [], v(e).empty = !0;
                            var n, r, i, s, m, Y, U, t = "" + e._i,
                                x = t.length,
                                w = 0;
                            for (U = (i = dt(e._f, e._locale).match(xe) || []).length, n = 0; n < U; n++)(r = (t.match(Gt(s = i[n], e)) || [])[0]) && ((m = t.substr(0, t.indexOf(r))).length > 0 && v(e).unusedInput.push(m), t = t.slice(t.indexOf(r) + r.length), w += r.length), pe[s] ? (r ? v(e).empty = !1 : v(e).unusedTokens.push(s), $t(s, r, e)) : e._strict && !r && v(e).unusedTokens.push(s);
                            v(e).charsLeftOver = x - w, t.length > 0 && v(e).unusedInput.push(t), e._a[3] <= 12 && !0 === v(e).bigHour && e._a[3] > 0 && (v(e).bigHour = void 0), v(e).parsedDateParts = e._a.slice(0), v(e).meridiem = e._meridiem, e._a[3] = function ro(e, t, n) {
                                var r;
                                return null == n ? t : null != e.meridiemHour ? e.meridiemHour(t, n) : (null != e.isPM && ((r = e.isPM(n)) && t < 12 && (t += 12), !r && 12 === t && (t = 0)), t)
                            }(e._locale, e._a[3], e._meridiem), null !== (Y = v(e).era) && (e._a[0] = e._locale.erasConvertYear(Y, e._a[0])), oa(e), aa(e)
                        } else Da(e);
                    else Sa(e)
                }

                function Na(e) {
                    var t = e._i,
                        n = e._f;
                    return e._locale = e._locale || re(e._l), null === t || void 0 === n && "" === t ? Se({
                        nullInput: !0
                    }) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)), $(t) ? new me(aa(t)) : (I(t) ? e._d = t : N(n) ? function io(e) {
                        var t, n, r, i, s, m, x = !1,
                            w = e._f.length;
                        if (0 === w) return v(e).invalidFormat = !0, void(e._d = new Date(NaN));
                        for (i = 0; i < w; i++) s = 0, m = !1, t = qe({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[i], ra(t), He(t) && (m = !0), s += v(t).charsLeftOver, s += 10 * v(t).unusedTokens.length, v(t).score = s, x ? s < r && (r = s, n = t) : (null == r || s < r || m) && (r = s, n = t, m && (x = !0));
                        D(e, n || t)
                    }(e) : n ? ra(e) : function co(e) {
                        var t = e._i;
                        O(t) ? e._d = new Date(p.now()) : I(t) ? e._d = new Date(t.valueOf()) : "string" == typeof t ? function ao(e) {
                            var t = Un.exec(e._i);
                            null === t ? (Sa(e), !1 === e._isValid && (delete e._isValid, Da(e), !1 === e._isValid && (delete e._isValid, e._strict ? e._isValid = !1 : p.createFromInputFallback(e)))) : e._d = new Date(+t[1])
                        }(e) : N(t) ? (e._a = H(t.slice(0), function(n) {
                            return parseInt(n, 10)
                        }), oa(e)) : z(t) ? function lo(e) {
                            if (!e._d) {
                                var t = ve(e._i);
                                e._a = H([t.year, t.month, void 0 === t.day ? t.date : t.day, t.hour, t.minute, t.second, t.millisecond], function(r) {
                                    return r && parseInt(r, 10)
                                }), oa(e)
                            }
                        }(e) : T(t) ? e._d = new Date(t) : p.createFromInputFallback(e)
                    }(e), He(e) || (e._d = null), e))
                }

                function Oa(e, t, n, r, i) {
                    var s = {};
                    return (!0 === t || !1 === t) && (r = t, t = void 0), (!0 === n || !1 === n) && (r = n, n = void 0), (z(e) && K(e) || N(e) && 0 === e.length) && (e = void 0), s._isAMomentObject = !0, s._useUTC = s._isUTC = i, s._l = n, s._i = e, s._f = t, s._strict = r,
                        function so(e) {
                            var t = new me(aa(Na(e)));
                            return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t
                        }(s)
                }

                function Z(e, t, n, r) {
                    return Oa(e, t, n, r, !1)
                }
                p.createFromInputFallback = Q("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(e) {
                    e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
                }), p.ISO_8601 = function() {}, p.RFC_2822 = function() {};
                var mo = Q("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                        var e = Z.apply(null, arguments);
                        return this.isValid() && e.isValid() ? e < this ? this : e : Se()
                    }),
                    po = Q("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                        var e = Z.apply(null, arguments);
                        return this.isValid() && e.isValid() ? e > this ? this : e : Se()
                    });

                function Ia(e, t) {
                    var n, r;
                    if (1 === t.length && N(t[0]) && (t = t[0]), !t.length) return Z();
                    for (n = t[0], r = 1; r < t.length; ++r)(!t[r].isValid() || t[r][e](n)) && (n = t[r]);
                    return n
                }
                var it = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

                function vt(e) {
                    var t = ve(e),
                        n = t.year || 0,
                        r = t.quarter || 0,
                        i = t.month || 0,
                        s = t.week || t.isoWeek || 0,
                        m = t.day || 0,
                        x = t.hour || 0,
                        w = t.minute || 0,
                        Y = t.second || 0,
                        U = t.millisecond || 0;
                    this._isValid = function fo(e) {
                        var t, r, n = !1,
                            i = it.length;
                        for (t in e)
                            if (f(e, t) && (-1 === A.call(it, t) || null != e[t] && isNaN(e[t]))) return !1;
                        for (r = 0; r < i; ++r)
                            if (e[it[r]]) {
                                if (n) return !1;
                                parseFloat(e[it[r]]) !== k(e[it[r]]) && (n = !0)
                            } return !0
                    }(t), this._milliseconds = +U + 1e3 * Y + 6e4 * w + 1e3 * x * 60 * 60, this._days = +m + 7 * s, this._months = +i + 3 * r + 12 * n, this._data = {}, this._locale = re(), this._bubble()
                }

                function kt(e) {
                    return e instanceof vt
                }

                function ia(e) {
                    return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
                }

                function Ya(e, t) {
                    _(e, 0, 0, function() {
                        var n = this.utcOffset(),
                            r = "+";
                        return n < 0 && (n = -n, r = "-"), r + ee(~~(n / 60), 2) + t + ee(~~n % 60, 2)
                    })
                }
                Ya("Z", ":"), Ya("ZZ", ""), b("Z", Fe), b("ZZ", Fe), S(["Z", "ZZ"], function(e, t, n) {
                    n._useUTC = !0, n._tzm = la(Fe, e)
                });
                var yo = /([\+\-]|\d\d)/gi;

                function la(e, t) {
                    var i, s, n = (t || "").match(e);
                    return null === n ? null : 0 === (s = 60 * (i = ((n[n.length - 1] || []) + "").match(yo) || ["-", 0, 0])[1] + k(i[2])) ? 0 : "+" === i[0] ? s : -s
                }

                function sa(e, t) {
                    var n, r;
                    return t._isUTC ? (n = t.clone(), r = ($(e) || I(e) ? e.valueOf() : Z(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + r), p.updateOffset(n, !1), n) : Z(e).local()
                }

                function ca(e) {
                    return -Math.round(e._d.getTimezoneOffset())
                }

                function Pa() {
                    return !!this.isValid() && this._isUTC && 0 === this._offset
                }
                p.updateOffset = function() {};
                var Io = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
                    Yo = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

                function te(e, t) {
                    var i, s, m, n = e,
                        r = null;
                    return kt(e) ? n = {
                        ms: e._milliseconds,
                        d: e._days,
                        M: e._months
                    } : T(e) || !isNaN(+e) ? (n = {}, t ? n[t] = +e : n.milliseconds = +e) : (r = Io.exec(e)) ? (i = "-" === r[1] ? -1 : 1, n = {
                        y: 0,
                        d: k(r[2]) * i,
                        h: k(r[3]) * i,
                        m: k(r[4]) * i,
                        s: k(r[5]) * i,
                        ms: k(ia(1e3 * r[6])) * i
                    }) : (r = Yo.exec(e)) ? n = {
                        y: Ce(r[2], i = "-" === r[1] ? -1 : 1),
                        M: Ce(r[3], i),
                        w: Ce(r[4], i),
                        d: Ce(r[5], i),
                        h: Ce(r[6], i),
                        m: Ce(r[7], i),
                        s: Ce(r[8], i)
                    } : null == n ? n = {} : "object" == typeof n && ("from" in n || "to" in n) && (m = function Po(e, t) {
                        var n;
                        return e.isValid() && t.isValid() ? (t = sa(t, e), e.isBefore(t) ? n = La(e, t) : ((n = La(t, e)).milliseconds = -n.milliseconds, n.months = -n.months), n) : {
                            milliseconds: 0,
                            months: 0
                        }
                    }(Z(n.from), Z(n.to)), (n = {}).ms = m.milliseconds, n.M = m.months), s = new vt(n), kt(e) && f(e, "_locale") && (s._locale = e._locale), kt(e) && f(e, "_isValid") && (s._isValid = e._isValid), s
                }

                function Ce(e, t) {
                    var n = e && parseFloat(e.replace(",", "."));
                    return (isNaN(n) ? 0 : n) * t
                }

                function La(e, t) {
                    var n = {};
                    return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n
                }

                function Aa(e, t) {
                    return function(n, r) {
                        var s;
                        return null !== r && !isNaN(+r) && (Je(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), s = n, n = r, r = s), Za(this, te(n, r), e), this
                    }
                }

                function Za(e, t, n, r) {
                    var i = t._milliseconds,
                        s = ia(t._days),
                        m = ia(t._months);
                    !e.isValid() || (r = r ?? !0, m && ha(e, Ye(e, "Month") + m * n), s && pt(e, "Date", Ye(e, "Date") + s * n), i && e._d.setTime(e._d.valueOf() + i * n), r && p.updateOffset(e, s || m))
                }
                te.fn = vt.prototype, te.invalid = function _o() {
                    return te(NaN)
                };
                var Lo = Aa(1, "add"),
                    Ao = Aa(-1, "subtract");

                function Fa(e) {
                    return "string" == typeof e || e instanceof String
                }

                function Zo(e) {
                    return $(e) || I(e) || Fa(e) || T(e) || function zo(e) {
                        var t = N(e),
                            n = !1;
                        return t && (n = 0 === e.filter(function(r) {
                            return !T(r) && Fa(e)
                        }).length), t && n
                    }(e) || function Fo(e) {
                        var i, t = z(e) && !K(e),
                            n = !1,
                            r = ["years", "year", "y", "months", "month", "M", "days", "day", "d", "dates", "date", "D", "hours", "hour", "h", "minutes", "minute", "m", "seconds", "second", "s", "milliseconds", "millisecond", "ms"],
                            m = r.length;
                        for (i = 0; i < m; i += 1) n = n || f(e, r[i]);
                        return t && n
                    }(e) || null == e
                }

                function Wo(e) {
                    var i, t = z(e) && !K(e),
                        n = !1,
                        r = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"];
                    for (i = 0; i < r.length; i += 1) n = n || f(e, r[i]);
                    return t && n
                }

                function wt(e, t) {
                    if (e.date() < t.date()) return -wt(t, e);
                    var n = 12 * (t.year() - e.year()) + (t.month() - e.month()),
                        r = e.clone().add(n, "months");
                    return -(n + (t - r < 0 ? (t - r) / (r - e.clone().add(n - 1, "months")) : (t - r) / (e.clone().add(n + 1, "months") - r))) || 0
                }

                function za(e) {
                    var t;
                    return void 0 === e ? this._locale._abbr : (null != (t = re(e)) && (this._locale = t), this)
                }
                p.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", p.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
                var Wa = Q("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
                    return void 0 === e ? this.localeData() : this.locale(e)
                });

                function Ra() {
                    return this._locale
                }
                var Re = 6e4,
                    Mt = 60 * Re,
                    ja = 3506328 * Mt;

                function je(e, t) {
                    return (e % t + t) % t
                }

                function Ea(e, t, n) {
                    return e < 100 && e >= 0 ? new Date(e + 400, t, n) - ja : new Date(e, t, n).valueOf()
                }

                function Qa(e, t, n) {
                    return e < 100 && e >= 0 ? Date.UTC(e + 400, t, n) - ja : Date.UTC(e, t, n)
                }

                function da(e, t) {
                    return t.erasAbbrRegex(e)
                }

                function ma() {
                    var i, s, e = [],
                        t = [],
                        n = [],
                        r = [],
                        m = this.eras();
                    for (i = 0, s = m.length; i < s; ++i) t.push(B(m[i].name)), e.push(B(m[i].abbr)), n.push(B(m[i].narrow)), r.push(B(m[i].name)), r.push(B(m[i].abbr)), r.push(B(m[i].narrow));
                    this._erasRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp("^(" + n.join("|") + ")", "i")
                }

                function Tt(e, t) {
                    _(0, [e, e.length], 0, t)
                }

                function Ha(e, t, n, r, i) {
                    var s;
                    return null == e ? nt(this, r, i).year : (t > (s = oe(e, r, i)) && (t = s), Ar.call(this, e, t, n, r, i))
                }

                function Ar(e, t, n, r, i) {
                    var s = va(e, t, n, r, i),
                        m = at(s.year, 0, s.dayOfYear);
                    return this.year(m.getUTCFullYear()), this.month(m.getUTCMonth()), this.date(m.getUTCDate()), this
                }
                _("N", 0, 0, "eraAbbr"), _("NN", 0, 0, "eraAbbr"), _("NNN", 0, 0, "eraAbbr"), _("NNNN", 0, 0, "eraName"), _("NNNNN", 0, 0, "eraNarrow"), _("y", ["y", 1], "yo", "eraYear"), _("y", ["yy", 2], 0, "eraYear"), _("y", ["yyy", 3], 0, "eraYear"), _("y", ["yyyy", 4], 0, "eraYear"), b("N", da), b("NN", da), b("NNN", da), b("NNNN", function Tr(e, t) {
                    return t.erasNameRegex(e)
                }), b("NNNNN", function Sr(e, t) {
                    return t.erasNarrowRegex(e)
                }), S(["N", "NN", "NNN", "NNNN", "NNNNN"], function(e, t, n, r) {
                    var i = n._locale.erasParse(e, r, n._strict);
                    i ? v(n).era = i : v(n).invalidEra = e
                }), b("y", ge), b("yy", ge), b("yyy", ge), b("yyyy", ge), b("yo", function Dr(e, t) {
                    return t._eraYearOrdinalRegex || ge
                }), S(["y", "yy", "yyy", "yyyy"], 0), S(["yo"], function(e, t, n, r) {
                    var i;
                    n._locale._eraYearOrdinalRegex && (i = e.match(n._locale._eraYearOrdinalRegex)), t[0] = n._locale.eraYearOrdinalParse ? n._locale.eraYearOrdinalParse(e, i) : parseInt(e, 10)
                }), _(0, ["gg", 2], 0, function() {
                    return this.weekYear() % 100
                }), _(0, ["GG", 2], 0, function() {
                    return this.isoWeekYear() % 100
                }), Tt("gggg", "weekYear"), Tt("ggggg", "weekYear"), Tt("GGGG", "isoWeekYear"), Tt("GGGGG", "isoWeekYear"), W("weekYear", "gg"), W("isoWeekYear", "GG"), R("weekYear", 1), R("isoWeekYear", 1), b("G", Ze), b("g", Ze), b("GG", P, J), b("gg", P, J), b("GGGG", Xe, $e), b("gggg", Xe, $e), b("GGGGG", Ae, Pe), b("ggggg", Ae, Pe), we(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, n, r) {
                    t[r.substr(0, 2)] = k(e)
                }), we(["gg", "GG"], function(e, t, n, r) {
                    t[r] = p.parseTwoDigitYear(e)
                }), _("Q", 0, "Qo", "quarter"), W("quarter", "Q"), R("quarter", 7), b("Q", ut), S("Q", function(e, t) {
                    t[1] = 3 * (k(e) - 1)
                }), _("D", ["DD", 2], "Do", "date"), W("date", "D"), R("date", 9), b("D", P), b("DD", P, J), b("Do", function(e, t) {
                    return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
                }), S(["D", "DD"], 2), S("Do", function(e, t) {
                    t[2] = k(e.match(P)[0])
                });
                var qa = ue("Date", !0);
                _("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), W("dayOfYear", "DDD"), R("dayOfYear", 4), b("DDD", Le), b("DDDD", gt), S(["DDD", "DDDD"], function(e, t, n) {
                    n._dayOfYear = k(e)
                }), _("m", ["mm", 2], 0, "minute"), W("minute", "m"), R("minute", 14), b("m", P), b("mm", P, J), S(["m", "mm"], 4);
                var zr = ue("Minutes", !1);
                _("s", ["ss", 2], 0, "second"), W("second", "s"), R("second", 15), b("s", P), b("ss", P, J), S(["s", "ss"], 5);
                var fe, Ja, Wr = ue("Seconds", !1);
                for (_("S", 0, 0, function() {
                        return ~~(this.millisecond() / 100)
                    }), _(0, ["SS", 2], 0, function() {
                        return ~~(this.millisecond() / 10)
                    }), _(0, ["SSS", 3], 0, "millisecond"), _(0, ["SSSS", 4], 0, function() {
                        return 10 * this.millisecond()
                    }), _(0, ["SSSSS", 5], 0, function() {
                        return 100 * this.millisecond()
                    }), _(0, ["SSSSSS", 6], 0, function() {
                        return 1e3 * this.millisecond()
                    }), _(0, ["SSSSSSS", 7], 0, function() {
                        return 1e4 * this.millisecond()
                    }), _(0, ["SSSSSSSS", 8], 0, function() {
                        return 1e5 * this.millisecond()
                    }), _(0, ["SSSSSSSSS", 9], 0, function() {
                        return 1e6 * this.millisecond()
                    }), W("millisecond", "ms"), R("millisecond", 16), b("S", Le, ut), b("SS", Le, J), b("SSS", Le, gt), fe = "SSSS"; fe.length <= 9; fe += "S") b(fe, ge);

                function Rr(e, t) {
                    t[6] = k(1e3 * ("0." + e))
                }
                for (fe = "S"; fe.length <= 9; fe += "S") S(fe, Rr);
                Ja = ue("Milliseconds", !1), _("z", 0, 0, "zoneAbbr"), _("zz", 0, 0, "zoneName");
                var u = me.prototype;

                function Ba(e) {
                    return e
                }
                u.add = Lo, u.calendar = function jo(e, t) {
                    1 === arguments.length && (arguments[0] ? Zo(arguments[0]) ? (e = arguments[0], t = void 0) : Wo(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
                    var n = e || Z(),
                        r = sa(n, this).startOf("day"),
                        i = p.calendarFormat(this, r) || "sameElse",
                        s = t && (X(t[i]) ? t[i].call(this, n) : t[i]);
                    return this.format(s || this.localeData().calendar(i, this, Z(n)))
                }, u.clone = function Eo() {
                    return new me(this)
                }, u.diff = function Go(e, t, n) {
                    var r, i, s;
                    if (!this.isValid()) return NaN;
                    if (!(r = sa(e, this)).isValid()) return NaN;
                    switch (i = 6e4 * (r.utcOffset() - this.utcOffset()), t = G(t)) {
                        case "year":
                            s = wt(this, r) / 12;
                            break;
                        case "month":
                            s = wt(this, r);
                            break;
                        case "quarter":
                            s = wt(this, r) / 3;
                            break;
                        case "second":
                            s = (this - r) / 1e3;
                            break;
                        case "minute":
                            s = (this - r) / 6e4;
                            break;
                        case "hour":
                            s = (this - r) / 36e5;
                            break;
                        case "day":
                            s = (this - r - i) / 864e5;
                            break;
                        case "week":
                            s = (this - r - i) / 6048e5;
                            break;
                        default:
                            s = this - r
                    }
                    return n ? s : V(s)
                }, u.endOf = function rr(e) {
                    var t, n;
                    if (void 0 === (e = G(e)) || "millisecond" === e || !this.isValid()) return this;
                    switch (n = this._isUTC ? Qa : Ea, e) {
                        case "year":
                            t = n(this.year() + 1, 0, 1) - 1;
                            break;
                        case "quarter":
                            t = n(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                            break;
                        case "month":
                            t = n(this.year(), this.month() + 1, 1) - 1;
                            break;
                        case "week":
                            t = n(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                            break;
                        case "isoWeek":
                            t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                            break;
                        case "day":
                        case "date":
                            t = n(this.year(), this.month(), this.date() + 1) - 1;
                            break;
                        case "hour":
                            t = this._d.valueOf(), t += Mt - je(t + (this._isUTC ? 0 : this.utcOffset() * Re), Mt) - 1;
                            break;
                        case "minute":
                            t = this._d.valueOf(), t += Re - je(t, Re) - 1;
                            break;
                        case "second":
                            t = this._d.valueOf(), t += 1e3 - je(t, 1e3) - 1
                    }
                    return this._d.setTime(t), p.updateOffset(this, !0), this
                }, u.format = function Ko(e) {
                    e || (e = this.isUtc() ? p.defaultFormatUtc : p.defaultFormat);
                    var t = Oe(this, e);
                    return this.localeData().postformat(t)
                }, u.from = function er(e, t) {
                    return this.isValid() && ($(e) && e.isValid() || Z(e).isValid()) ? te({
                        to: this,
                        from: e
                    }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
                }, u.fromNow = function tr(e) {
                    return this.from(Z(), e)
                }, u.to = function ar(e, t) {
                    return this.isValid() && ($(e) && e.isValid() || Z(e).isValid()) ? te({
                        from: this,
                        to: e
                    }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
                }, u.toNow = function nr(e) {
                    return this.to(Z(), e)
                }, u.get = function qt(e) {
                    return X(this[e = G(e)]) ? this[e]() : this
                }, u.invalidAt = function gr() {
                    return v(this).overflow
                }, u.isAfter = function Qo(e, t) {
                    var n = $(e) ? e : Z(e);
                    return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = G(t) || "millisecond") ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf())
                }, u.isBefore = function Ho(e, t) {
                    var n = $(e) ? e : Z(e);
                    return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = G(t) || "millisecond") ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf())
                }, u.isBetween = function qo(e, t, n, r) {
                    var i = $(e) ? e : Z(e),
                        s = $(t) ? t : Z(t);
                    return !!(this.isValid() && i.isValid() && s.isValid()) && ("(" === (r = r || "()")[0] ? this.isAfter(i, n) : !this.isBefore(i, n)) && (")" === r[1] ? this.isBefore(s, n) : !this.isAfter(s, n))
                }, u.isSame = function Jo(e, t) {
                    var r, n = $(e) ? e : Z(e);
                    return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = G(t) || "millisecond") ? this.valueOf() === n.valueOf() : (r = n.valueOf(), this.clone().startOf(t).valueOf() <= r && r <= this.clone().endOf(t).valueOf()))
                }, u.isSameOrAfter = function Bo(e, t) {
                    return this.isSame(e, t) || this.isAfter(e, t)
                }, u.isSameOrBefore = function Uo(e, t) {
                    return this.isSame(e, t) || this.isBefore(e, t)
                }, u.isValid = function pr() {
                    return He(this)
                }, u.lang = Wa, u.locale = za, u.localeData = Ra, u.max = po, u.min = mo, u.parsingFlags = function ur() {
                    return D({}, v(this))
                }, u.set = function Jt(e, t) {
                    if ("object" == typeof e) {
                        var r, n = function Ht(e) {
                                var n, t = [];
                                for (n in e) f(e, n) && t.push({
                                    unit: n,
                                    priority: mt[n]
                                });
                                return t.sort(function(r, i) {
                                    return r.priority - i.priority
                                }), t
                            }(e = ve(e)),
                            i = n.length;
                        for (r = 0; r < i; r++) this[n[r].unit](e[n[r].unit])
                    } else if (X(this[e = G(e)])) return this[e](t);
                    return this
                }, u.startOf = function or(e) {
                    var t, n;
                    if (void 0 === (e = G(e)) || "millisecond" === e || !this.isValid()) return this;
                    switch (n = this._isUTC ? Qa : Ea, e) {
                        case "year":
                            t = n(this.year(), 0, 1);
                            break;
                        case "quarter":
                            t = n(this.year(), this.month() - this.month() % 3, 1);
                            break;
                        case "month":
                            t = n(this.year(), this.month(), 1);
                            break;
                        case "week":
                            t = n(this.year(), this.month(), this.date() - this.weekday());
                            break;
                        case "isoWeek":
                            t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                            break;
                        case "day":
                        case "date":
                            t = n(this.year(), this.month(), this.date());
                            break;
                        case "hour":
                            t = this._d.valueOf(), t -= je(t + (this._isUTC ? 0 : this.utcOffset() * Re), Mt);
                            break;
                        case "minute":
                            t = this._d.valueOf(), t -= je(t, Re);
                            break;
                        case "second":
                            t = this._d.valueOf(), t -= je(t, 1e3)
                    }
                    return this._d.setTime(t), p.updateOffset(this, !0), this
                }, u.subtract = Ao, u.toArray = function cr() {
                    var e = this;
                    return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
                }, u.toObject = function dr() {
                    var e = this;
                    return {
                        years: e.year(),
                        months: e.month(),
                        date: e.date(),
                        hours: e.hours(),
                        minutes: e.minutes(),
                        seconds: e.seconds(),
                        milliseconds: e.milliseconds()
                    }
                }, u.toDate = function sr() {
                    return new Date(this.valueOf())
                }, u.toISOString = function $o(e) {
                    if (!this.isValid()) return null;
                    var t = !0 !== e,
                        n = t ? this.clone().utc() : this;
                    return n.year() < 0 || n.year() > 9999 ? Oe(n, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : X(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", Oe(n, "Z")) : Oe(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
                }, u.inspect = function Xo() {
                    if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
                    var n, r, e = "moment",
                        t = "";
                    return this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", t = "Z"), n = "[" + e + '("]', r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", this.format(n + r + "-MM-DD[T]HH:mm:ss.SSS" + t + '[")]')
                }, typeof Symbol < "u" && null != Symbol.for && (u[Symbol.for("nodejs.util.inspect.custom")] = function() {
                    return "Moment<" + this.format() + ">"
                }), u.toJSON = function mr() {
                    return this.isValid() ? this.toISOString() : null
                }, u.toString = function Vo() {
                    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
                }, u.unix = function lr() {
                    return Math.floor(this.valueOf() / 1e3)
                }, u.valueOf = function ir() {
                    return this._d.valueOf() - 6e4 * (this._offset || 0)
                }, u.creationData = function br() {
                    return {
                        input: this._i,
                        format: this._f,
                        locale: this._locale,
                        isUTC: this._isUTC,
                        strict: this._strict
                    }
                }, u.eraName = function xr() {
                    var e, t, n, r = this.localeData().eras();
                    for (e = 0, t = r.length; e < t; ++e)
                        if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since) return r[e].name;
                    return ""
                }, u.eraNarrow = function yr() {
                    var e, t, n, r = this.localeData().eras();
                    for (e = 0, t = r.length; e < t; ++e)
                        if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since) return r[e].narrow;
                    return ""
                }, u.eraAbbr = function vr() {
                    var e, t, n, r = this.localeData().eras();
                    for (e = 0, t = r.length; e < t; ++e)
                        if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since) return r[e].abbr;
                    return ""
                }, u.eraYear = function kr() {
                    var e, t, n, r, i = this.localeData().eras();
                    for (e = 0, t = i.length; e < t; ++e)
                        if (n = i[e].since <= i[e].until ? 1 : -1, r = this.clone().startOf("day").valueOf(), i[e].since <= r && r <= i[e].until || i[e].until <= r && r <= i[e].since) return (this.year() - p(i[e].since).year()) * n + i[e].offset;
                    return this.year()
                }, u.year = ya, u.isLeapYear = function cn() {
                    return Ie(this.year())
                }, u.weekYear = function Nr(e) {
                    return Ha.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
                }, u.isoWeekYear = function Or(e) {
                    return Ha.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
                }, u.quarter = u.quarters = function Zr(e) {
                    return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
                }, u.month = _a, u.daysInMonth = function rn() {
                    return ht(this.year(), this.month())
                }, u.week = u.weeks = function bn(e) {
                    var t = this.localeData().week(this);
                    return null == e ? t : this.add(7 * (e - t), "d")
                }, u.isoWeek = u.isoWeeks = function fn(e) {
                    var t = nt(this, 1, 4).week;
                    return null == e ? t : this.add(7 * (e - t), "d")
                }, u.weeksInYear = function Pr() {
                    var e = this.localeData()._week;
                    return oe(this.year(), e.dow, e.doy)
                }, u.weeksInWeekYear = function Lr() {
                    var e = this.localeData()._week;
                    return oe(this.weekYear(), e.dow, e.doy)
                }, u.isoWeeksInYear = function Ir() {
                    return oe(this.year(), 1, 4)
                }, u.isoWeeksInISOWeekYear = function Yr() {
                    return oe(this.isoWeekYear(), 1, 4)
                }, u.date = qa, u.day = u.days = function Nn(e) {
                    if (!this.isValid()) return null != e ? this : NaN;
                    var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                    return null != e ? (e = function hn(e, t) {
                        return "string" != typeof e ? e : isNaN(e) ? "number" == typeof(e = t.weekdaysParse(e)) ? e : null : parseInt(e, 10)
                    }(e, this.localeData()), this.add(e - t, "d")) : t
                }, u.weekday = function On(e) {
                    if (!this.isValid()) return null != e ? this : NaN;
                    var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
                    return null == e ? t : this.add(e - t, "d")
                }, u.isoWeekday = function In(e) {
                    if (!this.isValid()) return null != e ? this : NaN;
                    if (null != e) {
                        var t = function _n(e, t) {
                            return "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e
                        }(e, this.localeData());
                        return this.day(this.day() % 7 ? t : t - 7)
                    }
                    return this.day() || 7
                }, u.dayOfYear = function Fr(e) {
                    var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
                    return null == e ? t : this.add(e - t, "d")
                }, u.hour = u.hours = zn, u.minute = u.minutes = zr, u.second = u.seconds = Wr, u.millisecond = u.milliseconds = Ja, u.utcOffset = function vo(e, t, n) {
                    var i, r = this._offset || 0;
                    if (!this.isValid()) return null != e ? this : NaN;
                    if (null != e) {
                        if ("string" == typeof e) {
                            if (null === (e = la(Fe, e))) return this
                        } else Math.abs(e) < 16 && !n && (e *= 60);
                        return !this._isUTC && t && (i = ca(this)), this._offset = e, this._isUTC = !0, null != i && this.add(i, "m"), r !== e && (!t || this._changeInProgress ? Za(this, te(e - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, p.updateOffset(this, !0), this._changeInProgress = null)), this
                    }
                    return this._isUTC ? r : ca(this)
                }, u.utc = function wo(e) {
                    return this.utcOffset(0, e)
                }, u.local = function Co(e) {
                    return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(ca(this), "m")), this
                }, u.parseZone = function Mo() {
                    if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
                    else if ("string" == typeof this._i) {
                        var e = la(Bt, this._i);
                        null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
                    }
                    return this
                }, u.hasAlignedHourOffset = function To(e) {
                    return !!this.isValid() && (e = e ? Z(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0)
                }, u.isDST = function So() {
                    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
                }, u.isLocal = function No() {
                    return !!this.isValid() && !this._isUTC
                }, u.isUtcOffset = function Oo() {
                    return !!this.isValid() && this._isUTC
                }, u.isUtc = Pa, u.isUTC = Pa, u.zoneAbbr = function jr() {
                    return this._isUTC ? "UTC" : ""
                }, u.zoneName = function Er() {
                    return this._isUTC ? "Coordinated Universal Time" : ""
                }, u.dates = Q("dates accessor is deprecated. Use date instead.", qa), u.months = Q("months accessor is deprecated. Use month instead", _a), u.years = Q("years accessor is deprecated. Use year instead", ya), u.zone = Q("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function ko(e, t) {
                    return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
                }), u.isDSTShifted = Q("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function Do() {
                    if (!O(this._isDSTShifted)) return this._isDSTShifted;
                    var t, e = {};
                    return qe(e, this), (e = Na(e))._a ? (t = e._isUTC ? E(e._a) : Z(e._a), this._isDSTShifted = this.isValid() && function xo(e, t, n) {
                        var m, r = Math.min(e.length, t.length),
                            i = Math.abs(e.length - t.length),
                            s = 0;
                        for (m = 0; m < r; m++)(n && e[m] !== t[m] || !n && k(e[m]) !== k(t[m])) && s++;
                        return s + i
                    }(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted
                });
                var M = Ue.prototype;

                function St(e, t, n, r) {
                    var i = re(),
                        s = E().set(r, t);
                    return i[n](s, e)
                }

                function Ua(e, t, n) {
                    if (T(e) && (t = e, e = void 0), e = e || "", null != t) return St(e, t, n, "month");
                    var r, i = [];
                    for (r = 0; r < 12; r++) i[r] = St(e, r, n, "month");
                    return i
                }

                function pa(e, t, n, r) {
                    "boolean" == typeof e ? (T(t) && (n = t, t = void 0), t = t || "") : (n = t = e, e = !1, T(t) && (n = t, t = void 0), t = t || "");
                    var m, i = re(),
                        s = e ? i._week.dow : 0,
                        x = [];
                    if (null != n) return St(t, (n + s) % 7, r, "day");
                    for (m = 0; m < 7; m++) x[m] = St(t, (m + s) % 7, r, "day");
                    return x
                }
                M.calendar = function It(e, t, n) {
                    var r = this._calendar[e] || this._calendar.sameElse;
                    return X(r) ? r.call(t, n) : r
                }, M.longDateFormat = function At(e) {
                    var t = this._longDateFormat[e],
                        n = this._longDateFormat[e.toUpperCase()];
                    return t || !n ? t : (this._longDateFormat[e] = n.match(xe).map(function(r) {
                        return "MMMM" === r || "MM" === r || "DD" === r || "dddd" === r ? r.slice(1) : r
                    }).join(""), this._longDateFormat[e])
                }, M.invalidDate = function Ft() {
                    return this._invalidDate
                }, M.ordinal = function Rt(e) {
                    return this._ordinal.replace("%d", e)
                }, M.preparse = Ba, M.postformat = Ba, M.relativeTime = function Et(e, t, n, r) {
                    var i = this._relativeTime[n];
                    return X(i) ? i(e, t, n, r) : i.replace(/%d/i, e)
                }, M.pastFuture = function Qt(e, t) {
                    var n = this._relativeTime[e > 0 ? "future" : "past"];
                    return X(n) ? n(t) : n.replace(/%s/i, t)
                }, M.set = function De(e) {
                    var t, n;
                    for (n in e) f(e, n) && (X(t = e[n]) ? this[n] = t : this["_" + n] = t);
                    this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
                }, M.eras = function fr(e, t) {
                    var n, r, i, s = this._eras || re("en")._eras;
                    for (n = 0, r = s.length; n < r; ++n) switch ("string" == typeof s[n].since && (i = p(s[n].since).startOf("day"), s[n].since = i.valueOf()), typeof s[n].until) {
                        case "undefined":
                            s[n].until = 1 / 0;
                            break;
                        case "string":
                            i = p(s[n].until).startOf("day").valueOf(), s[n].until = i.valueOf()
                    }
                    return s
                }, M.erasParse = function hr(e, t, n) {
                    var r, i, m, x, w, s = this.eras();
                    for (e = e.toUpperCase(), r = 0, i = s.length; r < i; ++r)
                        if (m = s[r].name.toUpperCase(), x = s[r].abbr.toUpperCase(), w = s[r].narrow.toUpperCase(), n) switch (t) {
                            case "N":
                            case "NN":
                            case "NNN":
                                if (x === e) return s[r];
                                break;
                            case "NNNN":
                                if (m === e) return s[r];
                                break;
                            case "NNNNN":
                                if (w === e) return s[r]
                        } else if ([m, x, w].indexOf(e) >= 0) return s[r]
                }, M.erasConvertYear = function _r(e, t) {
                    var n = e.since <= e.until ? 1 : -1;
                    return void 0 === t ? p(e.since).year() : p(e.since).year() + (t - e.offset) * n
                }, M.erasAbbrRegex = function Cr(e) {
                    return f(this, "_erasAbbrRegex") || ma.call(this), e ? this._erasAbbrRegex : this._erasRegex
                }, M.erasNameRegex = function wr(e) {
                    return f(this, "_erasNameRegex") || ma.call(this), e ? this._erasNameRegex : this._erasRegex
                }, M.erasNarrowRegex = function Mr(e) {
                    return f(this, "_erasNarrowRegex") || ma.call(this), e ? this._erasNarrowRegex : this._erasRegex
                }, M.months = function tn(e, t) {
                    return e ? N(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || fa).test(t) ? "format" : "standalone"][e.month()] : N(this._months) ? this._months : this._months.standalone
                }, M.monthsShort = function an(e, t) {
                    return e ? N(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[fa.test(t) ? "format" : "standalone"][e.month()] : N(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
                }, M.monthsParse = function on(e, t, n) {
                    var r, i, s;
                    if (this._monthsParseExact) return nn.call(this, e, t, n);
                    for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; r < 12; r++) {
                        if (i = E([2e3, r]), n && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp("^" + this.months(i, "").replace(".", "") + "$", "i"), this._shortMonthsParse[r] = new RegExp("^" + this.monthsShort(i, "").replace(".", "") + "$", "i")), !n && !this._monthsParse[r] && (s = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""), this._monthsParse[r] = new RegExp(s.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[r].test(e)) return r;
                        if (n && "MMM" === t && this._shortMonthsParse[r].test(e)) return r;
                        if (!n && this._monthsParse[r].test(e)) return r
                    }
                }, M.monthsRegex = function sn(e) {
                    return this._monthsParseExact ? (f(this, "_monthsRegex") || xa.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (f(this, "_monthsRegex") || (this._monthsRegex = en), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
                }, M.monthsShortRegex = function ln(e) {
                    return this._monthsParseExact ? (f(this, "_monthsRegex") || xa.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (f(this, "_monthsShortRegex") || (this._monthsShortRegex = Ka), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
                }, M.week = function mn(e) {
                    return nt(e, this._week.dow, this._week.doy).week
                }, M.firstDayOfYear = function gn() {
                    return this._week.doy
                }, M.firstDayOfWeek = function un() {
                    return this._week.dow
                }, M.weekdays = function Cn(e, t) {
                    var n = N(this._weekdays) ? this._weekdays : this._weekdays[e && !0 !== e && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
                    return !0 === e ? Xt(n, this._week.dow) : e ? n[e.day()] : n
                }, M.weekdaysMin = function Tn(e) {
                    return !0 === e ? Xt(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin
                }, M.weekdaysShort = function Mn(e) {
                    return !0 === e ? Xt(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort
                }, M.weekdaysParse = function Dn(e, t, n) {
                    var r, i, s;
                    if (this._weekdaysParseExact) return Sn.call(this, e, t, n);
                    for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++) {
                        if (i = E([2e3, 1]).day(r), n && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp("^" + this.weekdays(i, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[r] = new RegExp("^" + this.weekdaysShort(i, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[r] = new RegExp("^" + this.weekdaysMin(i, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[r] || (s = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, ""), this._weekdaysParse[r] = new RegExp(s.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[r].test(e)) return r;
                        if (n && "ddd" === t && this._shortWeekdaysParse[r].test(e)) return r;
                        if (n && "dd" === t && this._minWeekdaysParse[r].test(e)) return r;
                        if (!n && this._weekdaysParse[r].test(e)) return r
                    }
                }, M.weekdaysRegex = function Yn(e) {
                    return this._weekdaysParseExact ? (f(this, "_weekdaysRegex") || Kt.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (f(this, "_weekdaysRegex") || (this._weekdaysRegex = vn), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
                }, M.weekdaysShortRegex = function Pn(e) {
                    return this._weekdaysParseExact ? (f(this, "_weekdaysRegex") || Kt.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (f(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = kn), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
                }, M.weekdaysMinRegex = function Ln(e) {
                    return this._weekdaysParseExact ? (f(this, "_weekdaysRegex") || Kt.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (f(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = wn), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
                }, M.isPM = function Zn(e) {
                    return "p" === (e + "").toLowerCase().charAt(0)
                }, M.meridiem = function Wn(e, t, n) {
                    return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
                }, be("en", {
                    eras: [{
                        since: "0001-01-01",
                        until: 1 / 0,
                        offset: 1,
                        name: "Anno Domini",
                        narrow: "AD",
                        abbr: "AD"
                    }, {
                        since: "0000-12-31",
                        until: -1 / 0,
                        offset: 1,
                        name: "Before Christ",
                        narrow: "BC",
                        abbr: "BC"
                    }],
                    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
                    ordinal: function(e) {
                        var t = e % 10;
                        return e + (1 === k(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
                    }
                }), p.lang = Q("moment.lang is deprecated. Use moment.locale instead.", be), p.langData = Q("moment.langData is deprecated. Use moment.localeData instead.", re);
                var ie = Math.abs;

                function Ga(e, t, n, r) {
                    var i = te(t, n);
                    return e._milliseconds += r * i._milliseconds, e._days += r * i._days, e._months += r * i._months, e._bubble()
                }

                function Va(e) {
                    return e < 0 ? Math.floor(e) : Math.ceil(e)
                }

                function $a(e) {
                    return 4800 * e / 146097
                }

                function ua(e) {
                    return 146097 * e / 4800
                }

                function le(e) {
                    return function() {
                        return this.as(e)
                    }
                }
                var ai = le("ms"),
                    ni = le("s"),
                    oi = le("m"),
                    ri = le("h"),
                    ii = le("d"),
                    li = le("w"),
                    si = le("M"),
                    ci = le("Q"),
                    di = le("y");

                function Me(e) {
                    return function() {
                        return this.isValid() ? this._data[e] : NaN
                    }
                }
                var ui = Me("milliseconds"),
                    gi = Me("seconds"),
                    bi = Me("minutes"),
                    fi = Me("hours"),
                    hi = Me("days"),
                    _i = Me("months"),
                    xi = Me("years");
                var se = Math.round,
                    Ee = {
                        ss: 44,
                        s: 45,
                        m: 45,
                        h: 22,
                        d: 26,
                        w: null,
                        M: 11
                    };

                function vi(e, t, n, r, i) {
                    return i.relativeTime(t || 1, !!n, e, r)
                }
                var ga = Math.abs;

                function Qe(e) {
                    return (e > 0) - (e < 0) || +e
                }

                function Dt() {
                    if (!this.isValid()) return this.localeData().invalidDate();
                    var r, i, s, m, w, Y, U, ce, e = ga(this._milliseconds) / 1e3,
                        t = ga(this._days),
                        n = ga(this._months),
                        x = this.asSeconds();
                    return x ? (r = V(e / 60), i = V(r / 60), e %= 60, r %= 60, s = V(n / 12), n %= 12, m = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", w = x < 0 ? "-" : "", Y = Qe(this._months) !== Qe(x) ? "-" : "", U = Qe(this._days) !== Qe(x) ? "-" : "", ce = Qe(this._milliseconds) !== Qe(x) ? "-" : "", w + "P" + (s ? Y + s + "Y" : "") + (n ? Y + n + "M" : "") + (t ? U + t + "D" : "") + (i || r || e ? "T" : "") + (i ? ce + i + "H" : "") + (r ? ce + r + "M" : "") + (e ? ce + m + "S" : "")) : "P0D"
                }
                var C = vt.prototype;
                return C.isValid = function ho() {
                        return this._isValid
                    }, C.abs = function Vr() {
                        var e = this._data;
                        return this._milliseconds = ie(this._milliseconds), this._days = ie(this._days), this._months = ie(this._months), e.milliseconds = ie(e.milliseconds), e.seconds = ie(e.seconds), e.minutes = ie(e.minutes), e.hours = ie(e.hours), e.months = ie(e.months), e.years = ie(e.years), this
                    }, C.add = function $r(e, t) {
                        return Ga(this, e, t, 1)
                    }, C.subtract = function Xr(e, t) {
                        return Ga(this, e, t, -1)
                    }, C.as = function ei(e) {
                        if (!this.isValid()) return NaN;
                        var t, n, r = this._milliseconds;
                        if ("month" === (e = G(e)) || "quarter" === e || "year" === e) switch (t = this._days + r / 864e5, n = this._months + $a(t), e) {
                            case "month":
                                return n;
                            case "quarter":
                                return n / 3;
                            case "year":
                                return n / 12
                        } else switch (t = this._days + Math.round(ua(this._months)), e) {
                            case "week":
                                return t / 7 + r / 6048e5;
                            case "day":
                                return t + r / 864e5;
                            case "hour":
                                return 24 * t + r / 36e5;
                            case "minute":
                                return 1440 * t + r / 6e4;
                            case "second":
                                return 86400 * t + r / 1e3;
                            case "millisecond":
                                return Math.floor(864e5 * t) + r;
                            default:
                                throw new Error("Unknown unit " + e)
                        }
                    }, C.asMilliseconds = ai, C.asSeconds = ni, C.asMinutes = oi, C.asHours = ri, C.asDays = ii, C.asWeeks = li, C.asMonths = si, C.asQuarters = ci, C.asYears = di, C.valueOf = function ti() {
                        return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * k(this._months / 12) : NaN
                    }, C._bubble = function Kr() {
                        var i, s, m, x, w, e = this._milliseconds,
                            t = this._days,
                            n = this._months,
                            r = this._data;
                        return e >= 0 && t >= 0 && n >= 0 || e <= 0 && t <= 0 && n <= 0 || (e += 864e5 * Va(ua(n) + t), t = 0, n = 0), r.milliseconds = e % 1e3, i = V(e / 1e3), r.seconds = i % 60, s = V(i / 60), r.minutes = s % 60, m = V(s / 60), r.hours = m % 24, t += V(m / 24), n += w = V($a(t)), t -= Va(ua(w)), x = V(n / 12), n %= 12, r.days = t, r.months = n, r.years = x, this
                    }, C.clone = function mi() {
                        return te(this)
                    }, C.get = function pi(e) {
                        return e = G(e), this.isValid() ? this[e + "s"]() : NaN
                    }, C.milliseconds = ui, C.seconds = gi, C.minutes = bi, C.hours = fi, C.days = hi, C.weeks = function yi() {
                        return V(this.days() / 7)
                    }, C.months = _i, C.years = xi, C.humanize = function Mi(e, t) {
                        if (!this.isValid()) return this.localeData().invalidDate();
                        var i, s, n = !1,
                            r = Ee;
                        return "object" == typeof e && (t = e, e = !1), "boolean" == typeof e && (n = e), "object" == typeof t && (r = Object.assign({}, Ee, t), null != t.s && null == t.ss && (r.ss = t.s - 1)), s = function ki(e, t, n, r) {
                            var i = te(e).abs(),
                                s = se(i.as("s")),
                                m = se(i.as("m")),
                                x = se(i.as("h")),
                                w = se(i.as("d")),
                                Y = se(i.as("M")),
                                U = se(i.as("w")),
                                ce = se(i.as("y")),
                                he = s <= n.ss && ["s", s] || s < n.s && ["ss", s] || m <= 1 && ["m"] || m < n.m && ["mm", m] || x <= 1 && ["h"] || x < n.h && ["hh", x] || w <= 1 && ["d"] || w < n.d && ["dd", w];
                            return null != n.w && (he = he || U <= 1 && ["w"] || U < n.w && ["ww", U]), (he = he || Y <= 1 && ["M"] || Y < n.M && ["MM", Y] || ce <= 1 && ["y"] || ["yy", ce])[2] = t, he[3] = +e > 0, he[4] = r, vi.apply(null, he)
                        }(this, !n, r, i = this.localeData()), n && (s = i.pastFuture(+this, s)), i.postformat(s)
                    }, C.toISOString = Dt, C.toString = Dt, C.toJSON = Dt, C.locale = za, C.localeData = Ra, C.toIsoString = Q("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Dt), C.lang = Wa, _("X", 0, 0, "unix"), _("x", 0, 0, "valueOf"), b("x", Ze), b("X", /[+-]?\d+(\.\d{1,3})?/), S("X", function(e, t, n) {
                        n._d = new Date(1e3 * parseFloat(e))
                    }), S("x", function(e, t, n) {
                        n._d = new Date(k(e))
                    }), p.version = "2.29.2",
                    function ne(e) {
                        a = e
                    }(Z), p.fn = u, p.min = function uo() {
                        return Ia("isBefore", [].slice.call(arguments, 0))
                    }, p.max = function go() {
                        return Ia("isAfter", [].slice.call(arguments, 0))
                    }, p.now = function() {
                        return Date.now ? Date.now() : +new Date
                    }, p.utc = E, p.unix = function Qr(e) {
                        return Z(1e3 * e)
                    }, p.months = function qr(e, t) {
                        return Ua(e, t, "months")
                    }, p.isDate = I, p.locale = be, p.invalid = Se, p.duration = te, p.isMoment = $, p.weekdays = function Br(e, t, n) {
                        return pa(e, t, n, "weekdays")
                    }, p.parseZone = function Hr() {
                        return Z.apply(null, arguments).parseZone()
                    }, p.localeData = re, p.isDuration = kt, p.monthsShort = function Jr(e, t) {
                        return Ua(e, t, "monthsShort")
                    }, p.weekdaysMin = function Gr(e, t, n) {
                        return pa(e, t, n, "weekdaysMin")
                    }, p.defineLocale = ta, p.updateLocale = function Qn(e, t) {
                        if (null != t) {
                            var n, r, i = Ma;
                            null != F[e] && null != F[e].parentLocale ? F[e].set(Be(F[e]._config, t)) : (null != (r = xt(e)) && (i = r._config), t = Be(i, t), null == r && (t.abbr = e), (n = new Ue(t)).parentLocale = F[e], F[e] = n), be(e)
                        } else null != F[e] && (null != F[e].parentLocale ? (F[e] = F[e].parentLocale, e === be() && be(e)) : null != F[e] && delete F[e]);
                        return F[e]
                    }, p.locales = function Hn() {
                        return Ge(F)
                    }, p.weekdaysShort = function Ur(e, t, n) {
                        return pa(e, t, n, "weekdaysShort")
                    }, p.normalizeUnits = G, p.relativeTimeRounding = function wi(e) {
                        return void 0 === e ? se : "function" == typeof e && (se = e, !0)
                    }, p.relativeTimeThreshold = function Ci(e, t) {
                        return void 0 !== Ee[e] && (void 0 === t ? Ee[e] : (Ee[e] = t, "s" === e && (Ee.ss = t - 1), !0))
                    }, p.calendarFormat = function Ro(e, t) {
                        var n = e.diff(t, "days", !0);
                        return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
                    }, p.prototype = u, p.HTML5_FMT = {
                        DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
                        DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
                        DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
                        DATE: "YYYY-MM-DD",
                        TIME: "HH:mm",
                        TIME_SECONDS: "HH:mm:ss",
                        TIME_MS: "HH:mm:ss.SSS",
                        WEEK: "GGGG-[W]WW",
                        MONTH: "YYYY-MM"
                    }, p
            }()
        }
    }
]);
//# sourceMappingURL=69.9837ee927aa57626.js.map