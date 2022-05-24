class SoftPlay {
  adults = 0
  children = 0

  enter (numAdults, numChildren) {
    if (numAdults >= numChildren) {
      this.adults += numAdults 
      this.children += numChildren 
      return true

    } 
    return false
  }

  leave (numAdults, numChildren) {
    if (numChildren > numAdults || (this.adults - numAdults) < (this.children - numChildren)) {
      return false 
    }
    this.children -= numChildren 
    this.adults -= numAdults
    return true
  }

  occupancy() {
    return {
      adults: this.adults,
      children: this.children
    }
  }
}

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  SoftPlay: SoftPlay,
}