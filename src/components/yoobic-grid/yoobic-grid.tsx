import { Component, Prop, Host, h, State } from '@stencil/core';

export interface Sort {
  column: string;
  order: 'ASC' | 'DESC';
}

@Component({
  tag: 'yoobic-grid',
  styleUrl: 'yoobic-grid.css',
  shadow: true,
})
export class YoobicGrid {
  @Prop({ mutable: true }) data: object[] = [];
  @Prop() sortIconHexColor: string = 'FFFFFF';

  @State() sort: Sort = {
    column: 'id',
    order: 'ASC',
  };

  private getTableHeaders() {
    return Object.keys(this.data[0]).map(column => (
      <th data-column={column} key={column} onClick={this.sortByColumn}>
        {column}
        {this.getSortImg(column)}
      </th>
    ));
  }

  private getFormattedDataEntries(entry: object) {
    return Object.keys(this.data[0]).map((key: string) => {
      const value = entry[key];
      if (key.includes('year')) {
        return <td>{value > 0 ? `${value} AD` : `${value * -1} BC`}</td>;
      }
      switch (typeof value) {
        case 'object':
          return <td>{this.convertObjectToParagraphs(value)}</td>;
        case 'number':
          return <td>{this.formatNumber(value)}</td>;
        case 'string':
          return <td>{this.trimIfLongStrings(value)}</td>;
        default:
          return <td>{value}</td>;
      }
    });
  }

  private formatNumber = (num: number) => {
    return num.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
  };

  private convertObjectToParagraphs(object: object): any[] {
    return Object.keys(object).map(innerColumn => {
      const value = this.trimIfLongStrings(object[innerColumn]);
      return <p>{`${innerColumn}: ${value}`}</p>;
    });
  }

  private trimIfLongStrings(value: string | boolean | number) {
    if (typeof value !== 'string') {
      return value;
    } else if (value.length < 20) {
      return value;
    }
    return value.slice(0, 20) + '...';
  }

  private sortByColumn = e => {
    const { col, order, type } = this.updateSort(e);
    if (type === 'object') {
      this.sortByNestedObjectFirstKey(col, order);
    } else if (type === 'number') {
      this.data = this.data.sort((a, b) => (order === 'ASC' ? a[col] - b[col] : b[col] - a[col]));
    } else if (type === 'string') {
      this.data = this.data.sort((a, b) => {
        const [aVal, bVal] = [a[col].toUpperCase(), b[col].toUpperCase()];
        if (aVal === bVal) return 1;
        return order === 'ASC' ? (aVal < bVal ? -1 : 1) : aVal < bVal ? 1 : -1;
      });
    }
  };

  private sortByNestedObjectFirstKey(outerCol: string, order: string) {
    const object = this.data[0][outerCol];
    const innerCol = Object.keys(object)[0];
    // A drill to get rid off all the ugly brackets
    const getInner = (variable: object) => variable[outerCol][innerCol];

    if (typeof object[innerCol] === 'number') {
      this.data = this.data.sort((a, b) => (order === 'ASC' ? getInner(a) - getInner(b) : getInner(b) - getInner(a)));
    } else if (typeof object[innerCol] === 'string') {
      this.data = this.data.sort((a, b) => {
        const [aVal, bVal] = [getInner(a).toUpperCase(), getInner(b).toUpperCase()];
        if (aVal === bVal) return 1;
        return order === 'ASC' ? (aVal < bVal ? -1 : 1) : aVal < bVal ? 1 : -1;
      });
    }
  }

  private updateSort = e => {
    const { column } = e.target.dataset;
    const type = typeof this.data[0][column];
    let order = this.sort.order;
    if (this.sort.column === column) {
      order = this.sort.order === 'ASC' ? 'DESC' : 'ASC';
      this.sort = { ...this.sort, order };
    } else {
      order = 'ASC';
      this.sort = { column, order };
    }
    return { col: column, order, type };
  };

  private getSortImg = (column: string) => {
    return this.sort.column === column ? (
      this.sort.order === 'ASC' ? (
        <img src={`https://img.icons8.com/material-outlined/20/${this.sortIconHexColor}/up-squared.png`} alt="sort arrow" />
      ) : (
        <img src={`https://img.icons8.com/material-outlined/20/${this.sortIconHexColor}/down-squared.png`} alt="sort arrow" />
      )
    ) : (
      ''
    );
  };

  render() {
    return this.data.length > 0 ? (
      <Host>
        <table class="table">
          <thead>
            <tr>{this.getTableHeaders()}</tr>
          </thead>
          <tbody>
            {this.data.map(entry => (
              <tr>{this.getFormattedDataEntries(entry)}</tr>
            ))}
          </tbody>
        </table>
      </Host>
    ) : (
      <Host>
        <p>Nothing to show</p>
      </Host>
    );
  }
}
