import {
  DxGroupingState,
  DxIntegratedGrouping,
} from '@devexpress/dx-vue-grid';
import {
  DxGrid,
  DxTable,
  DxTableHeaderRow,
  DxTableGroupRow,
  DxGroupingPanel,
  DxToolbar,
} from '@devexpress/dx-vue-grid-bootstrap4';

import { generateRows } from '../../../demo-data/generator';

export default {
  data() {
    return {
      columns: [
        { name: 'name', title: 'Name' },
        { name: 'sex', title: 'Sex' },
        { name: 'city', title: 'City' },
        { name: 'car', title: 'Car' },
      ],
      rows: generateRows({ length: 8 }),
      grouping: [{ columnName: 'city' }],
      expandedGroups: [],
      groupingStateColumnExtensions: [
        { columnName: 'name', groupingEnabled: false },
        { columnName: 'city', groupingEnabled: false },
      ],
    };
  },
  template: `
    <div class="card">
      <dx-grid
        :rows="rows"
        :columns="columns"
      >
        <dx-grouping-state
          :grouping.sync="grouping"
          :expandedGroups.sync="expandedGroups"
          :columnExtensions="groupingStateColumnExtensions"
        />
        <dx-integrated-grouping />
        <dx-table />
        <dx-table-header-row
          showGroupingControls
        />
        <dx-table-group-row />
        <dx-toolbar />
        <dx-grouping-panel
          showGroupingControls
        />
      </dx-grid>
    </div>
  `,
  components: {
    DxGroupingState,
    DxIntegratedGrouping,
    DxGrid,
    DxTable,
    DxTableHeaderRow,
    DxTableGroupRow,
    DxToolbar,
    DxGroupingPanel,
  },
};
