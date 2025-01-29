import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import TestButton from './TestButton';

describe('TestButton 동작 테스트', () => {
  test('버튼에 전달된 label이 화면에 표시된다', () => {
    const label = 'Click me';
    const mockOnClick = jest.fn();

    render(<TestButton label={label} onClick={mockOnClick} />);

    // 버튼 텍스트가 화면에 나타나는지 확인
    const buttonElement = screen.getByRole('button', { name: label });
    expect(buttonElement).toBeInTheDocument();
  });

  test('버튼 클릭 시 onClick 함수가 호출된다', async () => {
    const label = 'Click me';
    const mockOnClick = jest.fn();

    render(<TestButton label={label} onClick={mockOnClick} />);

    const buttonElement = screen.getByRole('button', { name: label });
    await userEvent.click(buttonElement);

    // expect(mockOnClick).toHaveBeenCalled();
    expect(mockOnClick).toHaveBeenCalledTimes(1);

    await userEvent.click(buttonElement);
    await userEvent.click(buttonElement);
    expect(mockOnClick).toHaveBeenCalledTimes(3);
  });
});
