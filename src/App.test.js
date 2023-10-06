/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen, act } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('App', () => {
  test('displays title', () => {
    render(<App />);
    const linkElement = screen.getByText(/google translate clone/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('displays English-to-Spanish by default', async () => {
    render(<App />);
    const sourceLanguageButton = await screen.findByRole('button', { name: /english/i })
    const targetLanguageButton = await screen.findByRole('button', { name: /spanish/i })
    const sourceLanguagePlaceholder = screen.getByPlaceholderText(/enter text here/i);
    const targetLanguagePlaceholder = screen.getByPlaceholderText(/translation will appear here/i);
    expect(sourceLanguageButton).toBeInTheDocument();
    expect(targetLanguageButton).toBeInTheDocument();
    expect(sourceLanguagePlaceholder).toBeInTheDocument();
    expect(targetLanguagePlaceholder).toBeInTheDocument();
  });

  test('translates English to Spanish', async () => {
    render(<App />);
    const sourceLanguageField = await screen.findByPlaceholderText(/enter text here/i);
    act(() => userEvent.type(sourceLanguageField, 'hello world'))
    const targetLanguageField = await screen.findByDisplayValue(/hola mundo/i);
    expect(targetLanguageField).toBeInTheDocument();
  });

  test('swaps languages and translates Spanish to English', async () => {
    render(<App />);
    const swapLanguagesButton = await screen.findByLabelText(/swap languages/i)
    act(() => userEvent.click(swapLanguagesButton))
    const sourceLanguageField = await screen.findByPlaceholderText(/enter text here/i);
    act(() => userEvent.type(sourceLanguageField, 'hola mundo'))
    const targetLanguageField = await screen.findByDisplayValue(/hello world/i);
    expect(targetLanguageField).toBeInTheDocument();
  });

  test('selects French as target and translates English to French', async () => {
    render(<App />);
    const targetLanguageButton = await screen.findByRole('button', { name: /spanish/i })
    act(() => userEvent.click(targetLanguageButton))
    const frenchButton = await screen.findByRole('button', { name: /french/i })
    act(() => userEvent.click(frenchButton))

    const sourceLanguageField = await screen.findByPlaceholderText(/enter text here/i);
    act(() => userEvent.type(sourceLanguageField, 'hello world'))
    const targetLanguageField = await screen.findByDisplayValue(/bonjour le monde/i);
    expect(targetLanguageField).toBeInTheDocument();
  });

  test('selects French as source and translates French to Spanish', async () => {
    render(<App />);
    const sourceLanguageButton = await screen.findByRole('button', { name: /english/i })
    act(() => userEvent.click(sourceLanguageButton))
    const frenchButton = await screen.findByRole('button', { name: /french/i })
    act(() => userEvent.click(frenchButton))

    const sourceLanguageField = await screen.findByPlaceholderText(/enter text here/i);
    act(() => userEvent.type(sourceLanguageField, 'bonjour le monde'))
    const targetLanguageField = await screen.findByDisplayValue(/hola mundo/i);
    expect(targetLanguageField).toBeInTheDocument();
  });
})
