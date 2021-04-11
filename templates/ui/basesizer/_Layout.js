/*
Steps of layout:

1. Calculate parent width
2. Width wrapping
3. Calculate parent height
4. Resize parent
5. Layout children
    1. Get expand child width
    2. Get expand child height
    3. Layout/resize child
    4. Place child
*/

// Override
var _layout = function (parent, newWidth, newHeight) {
    // Skip hidden or !dirty sizer
    if (this.rexSizer.hidden || (!this.dirty)) {
        return this;
    }

    this.preLayout(parent);

    // Calculate parent width
    if (newWidth === undefined) {
        newWidth = Math.max(this.childrenWidth, this.minWidth);
    }
    // Width wrapping

    // Calculate parent height
    if (newHeight === undefined) {
        newHeight = Math.max(this.childrenHeight, this.minHeight);
    }
    // Resize parent
    this.resize(newWidth, newHeight);

    // Layout children

    // Layout background children
    this.layoutBackgrounds();

    return this.postLayout();
}
export default _layout;