(function () {
    "use strict";

    function ColorPicker(props) {
        function colorChoices() {
            return props.colors.map(function (name) {
                return (
                    <option value={name} key={name}>
                        {name}
                    </option>
                );
            });
        }

        function onColorChange(evt) {
            props.handleColorChange(evt.target.value);
        }

        return (
            <div className="color-group">
                <label htmlFor="color-choices">Color:</label>
                <select
                    defaultValue={props.color}
                    name="colorChoices"
                    id="color-choices"
                    onChange={onColorChange}>
                    {colorChoices()}
                </select>
            </div>
        );
    }

    // RH Bookcase
    function BookcaseImage(props) {
        return (
            <img src={`img/react/${props.color}.jpg`} alt="Bookcase Image" />
        );
    }

    var CustomizeColor = createReactClass({
        getInitialState: function () {
            var colors = window.Office.bookcaseColors;

            return {
                color: "Distressed White",
                colors: colors
            };
        },

        handleColorChange: function (selectedColor) {
            var colorChoices = window.Office.byColor1[selectedColor];

            this.setState({
                color: selectedColor
            });

        },

        render: function () {
            return (
                <div className="customizer">
                    <div className="bookcase-image">
                        <BookcaseImage color={this.state.color} />
                    </div>
                    <div className="selectors">
                        <ColorPicker
                            color={this.state.color}
                            colors={this.state.colors}
                            handleColorChange={this.handleColorChange}
                        />
                    </div>
                </div>
            );
        }
    });

    ReactDOM.render(<CustomizeColor />, document.getElementById("react-bookcase"));

    // Etsy Art
    function ArtImage(props) {
        return (
            <img src={`img/react/${props.color}.jpg`} alt="Art Image" />
        );
    }

    var CustomizeColor = createReactClass({
        getInitialState: function () {
            var colors = window.Office.artColors;

            return {
                color: "white",
                colors: colors
            };
        },

        handleColorChange: function (selectedColor) {
            var colorChoices = window.Office.byColor2[selectedColor];

            this.setState({
                color: selectedColor
            });

        },

        render: function () {
            return (
                <div className="customizer">
                    <div className="art-image">
                        <ArtImage color={this.state.color} />
                    </div>
                    <div className="selectors">
                        <ColorPicker
                            color={this.state.color}
                            colors={this.state.colors}
                            handleColorChange={this.handleColorChange}
                        />
                    </div>
                </div>
            );
        }
    });

    ReactDOM.render(<CustomizeColor />, document.getElementById("react-art"));

    // PB Hydrangea
    function HydrangeaImage(props) {
        return (
            <img src={`img/react/${props.color}.jpg`} alt="Hydrangea Image" />
        );
    }

    var CustomizeColor = createReactClass({
        getInitialState: function () {
            var colors = window.Office.hydrangeaColors;

            return {
                color: "ivory",
                colors: colors
            };
        },

        handleColorChange: function (selectedColor) {
            var colorChoices = window.Office.byColor3[selectedColor];

            this.setState({
                color: selectedColor
            });

        },

        render: function () {
            return (
                <div className="customizer">
                    <div className="hydrangea-image">
                        <HydrangeaImage color={this.state.color} />
                    </div>
                    <div className="selectors">
                        <ColorPicker
                            color={this.state.color}
                            colors={this.state.colors}
                            handleColorChange={this.handleColorChange}
                        />
                    </div>
                </div>
            );
        }
    });

    ReactDOM.render(<CustomizeColor />, document.getElementById("react-hydrangea"));

    // West Elm Vase
    function VaseImage(props) {
        return (
            <img src={`img/react/${props.color}.jpg`} alt="Vase Image" />
        );
    }

    var CustomizeColor = createReactClass({
        getInitialState: function () {
            var colors = window.Office.vaseColors;

            return {
                color: "yellow",
                colors: colors
            };
        },

        handleColorChange: function (selectedColor) {
            var colorChoices = window.Office.byColor4[selectedColor];

            this.setState({
                color: selectedColor
            });

        },

        render: function () {
            return (
                <div className="customizer">
                    <div className="vase-image">
                        <VaseImage color={this.state.color} />
                    </div>
                    <div className="selectors">
                        <ColorPicker
                            color={this.state.color}
                            colors={this.state.colors}
                            handleColorChange={this.handleColorChange}
                        />
                    </div>
                </div>
            );
        }
    });

    ReactDOM.render(<CustomizeColor />, document.getElementById("react-vase"));
})();
