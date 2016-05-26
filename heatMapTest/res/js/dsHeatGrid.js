$(function () {
    // the widget definition, where "custom" is the namespace,
    // "wizard" the widget name
    
    console.log("calling heat grid******************************************************")
    debugger
    $.widget("ui.dsHeatGrid", {
        // default options
        options: {

            type: "RedToGreen", // RedToGreen or MonoChromatic 
            colors: [0, 200, 0], // accept colors in rgb format (if RedToGreen, the use ones which you are using now, else whatever is passed) 
            divSelector: "", // selector for number cell - in attribution, i think its isNumber ..
            cellSelector: "", // attribute which holds numeric value for each cell - can be data-value ...
            minValue: 0,
            attributeSelector:''
        },

        // see if we should have more options in this. 


        // the constructor
        _create: function () {

            this._refresh();
            
        },

        // called when created, and later when changing options
        _refresh: function () {

            // way to get options - 

            //	var that = this; 
            //	that.options.type ... etc..
            //      HERE - logic of HeatGrid comes
            
            var that = this
            var cellSelector = that.options.cellSelector
            var attributeSelector = that.options.attributeSelector
            var minValue = that.options.minValue
            var heatMapType = that.options.type
            var colors = that.options.colors
            if (heatMapType == "MonoChromatic" && colors.length < 3)
                colors= [0, 200, 0]
            console.log("fetching colorssssssssssssssssssssssssssssssssss")
            console.log(colors)
            var dataSet = $(that.element).find('.' + cellSelector).map(function () {
                var value
                if (attributeSelector != '') {

                    value = $(this).attr(attributeSelector)
                }
                else
                    value = $(this).text()

                if (!isNaN(value))
                    return parseInt(value)

            }).get();

            debugger
            if (heatMapType == "MonoChromatic") {
                
                setUniformColor()

             /*   var dataSetLength = dataSet.length

                var totalAvailableValue = 1 - minValue
                debugger
                var sortedDataSet = dataSet.slice().sort(function (a, b) { return a - b })
                var dataSetRanks = dataSet.map(function (v) { return sortedDataSet.indexOf(v) + 1 });




                var results = {};
                var duplicateCount = 0;

                for (var j = 0; j < sortedDataSet.length; j++) {
                    if (!results[sortedDataSet[j]]) {
                        results[sortedDataSet[j]] = 1
                    } else {
                        results[sortedDataSet[j]] = results[sortedDataSet[j]] + 1;
                    }
                }
                duplicateCount = Object.keys(results).length

                var incrValue = (totalAvailableValue / duplicateCount)
                console.log("colorrrrrrrrrrrrrrssssssssssssssssssssssssssssssssssssssssssss")
                console.log(colors)
                console.log(colors[0])
                $(that.element).find('.' + cellSelector).each(function () {
                    debugger
                    var value
                    if (attributeSelector != '') {

                        value = $(this).attr(attributeSelector)
                    }
                    else
                        value = $(this).text()
                    if (value != undefined) {
                        if (!isNaN(value)) {
                            debugger

                            var indexOfValue = dataSet.indexOf(parseInt(value))
                            var cellOpacity = ((dataSetRanks[indexOfValue]) * incrValue) + minValue
                            $(this).css('background-color', 'rgba('+colors[0]+','+colors[1]+','+colors[2]+','+ cellOpacity + ')')

                        }

                    }
                })*/
            }
            else {
                debugger
              /*  var neg = dataSet.filter(function (v) {
                    return v < 0;
                })
                // get positive values
                var pos = dataSet.filter(function (v) {
                    return v >= 0;
                })

                var sortedPos = pos.slice().sort(function (a, b) { return a - b })
                var ranksPos = pos.slice().map(function (v) { return sortedPos.indexOf(v) + 1 });
                var sortedNeg = neg.slice().sort(function (a, b) { return b - a })
                var ranksNeg = neg.slice().map(function (v) { return sortedNeg.indexOf(v) + 1 });

                var resultsPos = {}
                var resultsNeg = {}
                var uniqueCountPos = 0; var uniqueCountNeg = 0;

                for (var j = 0; j < sortedNeg.length; j++) {
                    // var key = myArray[j].toString(); // make it an associative array
                    if (!resultsNeg[sortedNeg[j]]) {
                        resultsNeg[sortedNeg[j]] = 1
                    } else {
                        resultsNeg[sortedPos[j]] = resultsNeg[sortedPos[j]] + 1;
                    }
                }
                uniqueCountNeg = Object.keys(resultsNeg).length

                for (var j = 0; j < sortedPos.length; j++) {
                    // var key = myArray[j].toString(); // make it an associative array
                    if (!resultsPos[sortedPos[j]]) {
                        resultsPos[sortedPos[j]] = 1
                    } else {
                        resultsPos[sortedPos[j]] = resultsPos[sortedPos[j]] + 1;
                    }
                }

                uniqueCountPos = Object.keys(resultsPos).length
                var totalAvailableValue = 1 - minValue

                var posIncrPer = totalAvailableValue / uniqueCountPos
                var negIncrPer = totalAvailableValue / uniqueCountNeg
                $(that.element).find('.' + cellSelector).each(function () {
                    debugger
                    var value
                    if (attributeSelector != '') {

                        value = $(this).attr(attributeSelector)
                    }
                    else
                        value = $(this).text()
                    if (value != undefined) {
                        if (!isNaN(value)) {
                            debugger
                            if (value >= 0) {
                                var indexOfValue = pos.indexOf(parseInt(value))
                                var cellOpacity = ((ranksPos[indexOfValue]) * posIncrPer) + minValue
                                $(this).css('background-color', 'rgba(0, 100, 0, ' + cellOpacity + ')')
                            }
                            else {
                                var indexOfValue = neg.indexOf(parseInt(value))
                                // var cellOpacity = (ranksNeg[sortedIndex] * negIncrPer) + 0.05
                                var cellOpacity = ((ranksNeg[indexOfValue]) * negIncrPer) + minValue
                                $(this).css('background-color', 'rgba(170, 0, 0, ' + cellOpacity + ')')
                            }

                        }

                    }
                })*/
                setRedGreenColors()

            }
            function setUniformColor(){
                var dataSetLength = dataSet.length

                var totalAvailableValue = 1 - minValue
                debugger
                var sortedDataSet = dataSet.slice().sort(function (a, b) { return a - b })
                var dataSetRanks = dataSet.map(function (v) { return sortedDataSet.indexOf(v) + 1 });




                var results = {};
                var duplicateCount = 0;

                for (var j = 0; j < sortedDataSet.length; j++) {
                    if (!results[sortedDataSet[j]]) {
                        results[sortedDataSet[j]] = 1
                    } else {
                        results[sortedDataSet[j]] = results[sortedDataSet[j]] + 1;
                    }
                }
                duplicateCount = Object.keys(results).length

                var incrValue = (totalAvailableValue / duplicateCount)
                console.log("colorrrrrrrrrrrrrrssssssssssssssssssssssssssssssssssssssssssss")
                console.log(colors)
                console.log(colors[0])
                $(that.element).find('.' + cellSelector).each(function () {
                    debugger
                    var value
                    if (attributeSelector != '') {

                        value = $(this).attr(attributeSelector)
                    }
                    else
                        value = $(this).text()
                    if (value != undefined) {
                        if (!isNaN(value)) {
                            debugger

                            var indexOfValue = dataSet.indexOf(parseInt(value))
                            var cellOpacity = ((dataSetRanks[indexOfValue]) * incrValue) + minValue
                            $(this).css('background-color', 'rgba('+colors[0]+','+colors[1]+','+colors[2]+','+ cellOpacity + ')')

                        }

                    }
                })
            }

            function setRedGreenColors() {
                var neg = dataSet.filter(function (v) {
                    return v < 0;
                })
                // get positive values
                var pos = dataSet.filter(function (v) {
                    return v >= 0;
                })

                var sortedPos = pos.slice().sort(function (a, b) { return a - b })
                var ranksPos = pos.slice().map(function (v) { return sortedPos.indexOf(v) + 1 });
                var sortedNeg = neg.slice().sort(function (a, b) { return b - a })
                var ranksNeg = neg.slice().map(function (v) { return sortedNeg.indexOf(v) + 1 });

                var resultsPos = {}
                var resultsNeg = {}
                var uniqueCountPos = 0; var uniqueCountNeg = 0;

                for (var j = 0; j < sortedNeg.length; j++) {
                    // var key = myArray[j].toString(); // make it an associative array
                    if (!resultsNeg[sortedNeg[j]]) {
                        resultsNeg[sortedNeg[j]] = 1
                    } else {
                        resultsNeg[sortedPos[j]] = resultsNeg[sortedPos[j]] + 1;
                    }
                }
                uniqueCountNeg = Object.keys(resultsNeg).length

                for (var j = 0; j < sortedPos.length; j++) {
                    // var key = myArray[j].toString(); // make it an associative array
                    if (!resultsPos[sortedPos[j]]) {
                        resultsPos[sortedPos[j]] = 1
                    } else {
                        resultsPos[sortedPos[j]] = resultsPos[sortedPos[j]] + 1;
                    }
                }

                uniqueCountPos = Object.keys(resultsPos).length
                var totalAvailableValue = 1 - minValue

                var posIncrPer = totalAvailableValue / uniqueCountPos
                var negIncrPer = totalAvailableValue / uniqueCountNeg
                $(that.element).find('.' + cellSelector).each(function () {
                    debugger
                    var value
                    if (attributeSelector != '') {

                        value = $(this).attr(attributeSelector)
                    }
                    else
                        value = $(this).text()
                    if (value != undefined) {
                        if (!isNaN(value)) {
                            debugger
                            if (value >= 0) {
                                var indexOfValue = pos.indexOf(parseInt(value))
                                var cellOpacity = ((ranksPos[indexOfValue]) * posIncrPer) + minValue
                                $(this).css('background-color', 'rgba(0, 100, 0, ' + cellOpacity + ')')
                            }
                            else {
                                var indexOfValue = neg.indexOf(parseInt(value))
                                // var cellOpacity = (ranksNeg[sortedIndex] * negIncrPer) + 0.05
                                var cellOpacity = ((ranksNeg[indexOfValue]) * negIncrPer) + minValue
                                $(this).css('background-color', 'rgba(170, 0, 0, ' + cellOpacity + ')')
                            }

                        }

                    }
                })
            }

            $(".options-widget-mouse-area").remove();
            $(".options-widget").remove();

            var h = $(window).height();

            var $area = $("<div class='options-widget-mouse-area' />").css({
                "position": "fixed",
                "border-radius": "100%",
                "width": "120px",
                "height": "120px",
                "top": "-60px",
                "right": "-60px",
                "z-index": "998",
                "opacity": 1,
                //"background-color": "red",
                "color": "red"
            }).appendTo($(document.body));

            var $widget = $("<div class='options-widget' />").css({
                "position": "fixed",
                "width": "280px",
                "height": "120px",
                "top": "0px",
                "right": "-280px",
                "height": h,
                "z-index": "999",
                "opacity": 0,
                "background-color": "white",
                "border": "1px solid rgba(0,0,0,.2)",
                "box-shadow": "0 2px 4px rgba(0,0,0,0.2)",
                "-webkit-transition-delay": "0s, 0s",
                "-webkit-transition-duration": "0.6s, 0.6s",
                "-webkit-transition-property": "right, opacity"
            }).appendTo($(document.body));

            //debugger;
            var opening = false;
            $area.hover(function (e) {

                //debugger;
                if (!opening) {
                    opening = true;

                    $widget.css({ right: 0, opacity: 1 });

                    $.fn.app("start").tile("options").get(function (resp) {

                        $widget.html(resp);
                    });

                    setTimeout(function () {
                        $(document.body).unbind("click.options");
                        $(document.body).bind("click.options", function (e) {

                            $(document.body).unbind("click.options");
                            $widget.css({ right: -280, opacity: 0 });

                            opening = false;
                        });
                    }, 1);
                }
            });
        },

        // events bound via _on are removed automatically
        // revert other modifications here
        _destroy: function () {
            //console.log("destroyed promise bar")

        },

        // _setOptions is called with a hash of all options that are changing
        // always refresh when changing options
        _setOptions: function () {
            // _super and _superApply handle keeping the right this-context
            this._superApply(arguments);
            this._refresh();
            
        },

        // _setOption is called for each individual option that is changing
        _setOption: function (key, value) {
            // prevent invalid color values
            if (/red|green|blue/.test(key) && (value < 0 || value > 255)) {
                return;
            }
            this._super(key, value);
        }
    });
});