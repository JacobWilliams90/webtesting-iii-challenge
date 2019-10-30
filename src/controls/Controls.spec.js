// Test away!
import React from "react";
import { render, fireEvent } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import Controls from "./Controls";

describe("<Controls />", () => {
  it("Is open and unlocked", () => {
    const mock = jest.fn();

    const { queryByText } = render(
      <Controls locked={false} closed={false} toggleClosed={mock} />
    );

    const lockButton = queryByText("Lock Gate");
    expect(lockButton.disabled).toBe(true);

    const closeButton = queryByText("Close Gate");
    expect(closeButton.disabled).toBe(false);

    fireEvent.click(closeButton);

    expect(mock).toBeCalled();
  });

  it("Is closed and unlock", () => {
    const mock = jest.fn();
    const { queryByText } = render(
      <Controls locked={false} closed={true} toggleClosed={mock} />
    );
    const lockButton = queryByText("Lock Gate");
    expect(lockButton.disabled).toBe(false);

    const openButton = queryByText("Open Gate");
    expect(openButton.disabled).toBe(false);

    fireEvent.click(openButton);

    expect(mock).toBeCalled();
  });

  it("Is closed and locked", () => {
    const mock = jest.fn();
    const { queryByText } = render(
      <Controls locked={true} closed={true} toggleLocked={mock} />
    );

    const unlockButton = queryByText("Unlock Gate");
    expect(unlockButton.disabled).toBe(false);

    const openButton = queryByText("Open Gate");
    expect(openButton.disabled).toBe(true);

    fireEvent.click(unlockButton);

    expect(mock).toBeCalled();
  });
});
