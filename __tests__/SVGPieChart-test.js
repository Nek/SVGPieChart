/** @jsx React.DOM */
jest.dontMock('../SVGPieChart.jsx');


describe('SVGPieChart', function() {
  it('generates svg', function() {
    var React = require('react/addons');
    var SVGPieChart = require('../SVGPieChart.jsx');
    var TestUtils = React.addons.TestUtils;

    var chart = TestUtils.renderIntoDocument(
      <SVGPieChart />
    );

    var svg = TestUtils.findRenderedDOMComponentWithTag(
      chart, 'svg');
    expect(svg.getDOMNode().textContent).toEqual('');
  });
});