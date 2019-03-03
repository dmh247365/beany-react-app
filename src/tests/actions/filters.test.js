import moment from "moment";
import {
  setTextFilter,
  sortByAmount,
  setStartDate,
  setEndDate,
  sortByDate
} from "../../actions/filters";

test("should set text filter to be blank", () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: ""
  });
});

test("should set text filter to be input", () => {
  const action = setTextFilter("test");
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "test"
  });
});

test("should set sort by amount", () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: "SORT_BY_AMOUNT"
  });
});

test("should generate set start date action object", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0)
  });
});

test("should generate set end data action object", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0)
  });
});

test("should generate a sort by date action object", () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: "SORT_BY_DATE"
  });
});
