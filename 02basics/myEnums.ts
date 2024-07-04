// to restrict choices for user
enum SeatChoice {
    AISLE="aisle",// default number is 0 but we can have AISLE=10
    MIDDLE=3,//the following simply follow subsequent order or previous
    WINDOW,
}
// we can also assign string or number or mix 
const hcSeat = SeatChoice.AISLE