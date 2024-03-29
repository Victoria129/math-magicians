import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../components/Home';
import Quote from '../components/Quote';
import Navbar from '../components/Navbar';
import Calculator from '../components/Calculator';

describe('Snapshot for Calculator and Home', () => {
  it('Snapshot should match component render', () => {
    const homeview = render(<Home />);
    expect(homeview).toMatchSnapshot();
  });
  it('Snapshot should match component render', () => {
    const quoteview = render(<Quote />);
    expect(quoteview).toMatchSnapshot();
  });
  it('Snapshot should match component render', () => {
    const navview = render(<BrowserRouter><Navbar /></BrowserRouter>);
    expect(navview).toMatchSnapshot();
  });
  it('Snapshot should match component render', () => {
    const calcview = render(<Calculator />);
    expect(calcview).toMatchSnapshot();
  });
});
