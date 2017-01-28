import 'babel-polyfill';

import React from 'react'; // Import React
import { render } from 'react-dom'; // Import render method
import { Grid, Row, Col } from 'react-bootstrap'; // Import react-bootstrap scripts
import Datatable from '../component/Test'; // Import this package
import faker from 'faker'; // Import faker to mock datas

import '../../scss/style.scss'; // For Webpack users

function getSlug(string) {
  return string.toLowerCase()
    .replace(/ +/g,'-')
    .replace(/\.+/g,'');
}

const header = [
  { title: 'Username', prop: 'username'  },
  { title: 'Name', prop: 'realname' },
  { title: 'Location', prop: 'location' }
];

let body = [];

for (let i = 0; i < 100; i++) {
  const name = faker.name.findName();

  body.push(
    {
      username: getSlug(name),
      realname: name,
      location: faker.address.streetAddress()
    }
  );
}

render(
  <Grid>
    <Row>
      <Col xs={12}>
        <h1>
          <a href={"https://github.com/Imballinst/react-bs-datatable"}>
            React Bootstrap Datatable
          </a>
        </h1>
        <hr />

        <h2>Example code</h2>
        <strong>index.js</strong>
        <pre>
          {`import 'babel-polyfill';

import React from 'react'; // Import React
import { render } from 'react-dom'; // Import render method
import { Grid, Row, Col } from 'react-bootstrap'; // Import react-bootstrap scripts
import Datatable from 'react-bs-datatable'; // Import this package
import faker from 'faker'; // Import faker to mock datas

import 'style.scss'; // For Webpack users

function getSlug(string) {
  return string.toLowerCase()
    .replace(/ +/g,'-')
    .replace(/\.+/g,'');
}

const header = [
  { title: 'Username', prop: 'username'  },
  { title: 'Name', prop: 'realname' },
  { title: 'Location', prop: 'location' }
];

let body = [];

for (let i = 0; i < 100; i++) {
  const name = faker.name.findName();

  body.push(
    {
      username: getSlug(name),
      realname: name,
      location: faker.address.streetAddress()
    }
  );
}

render(
  <Datatable
    tableHeader={header}
    tableBody={body}
    keyName="userTable"
    rowsPerPage={5}
    rowsPerPageOption={[5, 10, 15, 20]}
    sortable
    filterable
    initialSort={{prop: "username", isAscending: true}}
  />,
  document.getElementById('react-test')
);`}
        </pre>

        <strong>style.scss</strong>
        <pre>
          {`// Default icon font path
$icon-font-path: '~bootstrap-sass/assets/fonts/bootstrap/';
$fa-font-path: '~font-awesome/fonts/';

// Imports
@import '~bootstrap-sass/assets/stylesheets/bootstrap';
@import '~font-awesome/scss/font-awesome';

.table-custom {
  .table-custom-thead {
    .table-custom-thead-col {
      &.sortable {
        &:hover {
          background: #A7FAE8;
          cursor: pointer;
        }
      }
    }
  }
}`}
        </pre>
        <hr />
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <h2>Rendered Table</h2>

        <Datatable
          tableHeader={header}
          tableBody={body}
          keyName="userTable"
          rowsPerPage={5}
          rowsPerPageOption={[5, 10, 15, 20]}
          sortable
          filterable
          initialSort={{prop: "username", isAscending: true}}
        />
      </Col>
    </Row>
  </Grid>,
  document.getElementById('react-test')
);
