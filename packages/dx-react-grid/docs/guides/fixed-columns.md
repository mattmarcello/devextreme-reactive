# React Grid - Fixed Columns

The Grid allows you to fix one or more first and last columns. Fixed columns remain at their initial places regardless of the current scrolling position.

**Browser Support Notes:**

- The following browsers do not support fixed columns because they do not support `position: sticky`:  
 - Android Browser before 5.0  
 - WebView for Android before 5.0  
 - Internet Explorer  
 
- Currently, there is an issue with column fixing in Microsoft Edge. See this [issue](https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/16792336/) for more information.

## Related Plugins

The following plugins implement the capability to fix columns to the grid:

- [TableFixedColumns](../reference/table-fixed-columns.md) - renders fixed columns

## Basic Setup

Import the [TableFixedColumns](../reference/table-fixed-columns.md) plugin and specify the names of the columns that should be fixed. The `beforeColumnNames` property specifies columns fixed at the grid's left side, the `afterColumnNames` property - at the right side.

.embedded-demo({ "path": "grid-fixed-columns/basic", "showThemeSelector": true })

## Fixing Service Columns

You can also use the `beforeColumnTypes` and `afterColumnTypes` properties to fix service columns, such as Selection Column or Editing Column.

.embedded-demo({ "path": "grid-fixed-columns/with-selection", "showThemeSelector": true })

## Compatibility With Other Plugins

You can use the [TableFixedColumns](../reference/table-fixed-columns.md) plugin with other plugins.

.embedded-demo({ "path": "grid-fixed-columns/bands", "showThemeSelector": true })

## Virtual Table

The plugin works smoothly with both regular and virtual tables.

.embedded-demo({ "path": "grid-fixed-columns/virtual-table", "showThemeSelector": true })
