import React from 'react';
import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Page,
  Selection,
  Edit,
  Sort,
  Filter,
  Inject,
  Toolbar,
} from '@syncfusion/ej2-react-grids';
import { customersData, customersGrid } from '../../data/dummy';

import { Header } from '../../components';

function Customers() {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />

      <GridComponent
        dataSource={customersData}
        allowPaging={true}
        allowSorting
        toolbar={['Delete']}
        editSettings={{ allowEditing: true, allowDeleting: true }}
        width="auto"
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Sort, Filter, Page, Edit, Selection, Toolbar]} />
      </GridComponent>
    </div>
  );
}

export default Customers;
