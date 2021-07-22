print = console.log


class Gen {
    constructor(first_member='1') {
        this.sequence = [first_member, `1${first_member}`]
    }

    addLine() {
        let prevLine = this.sequence[this.sequence.length - 1]
        var newLine = ""
        var counter = 1
        for (let i = 1; i <= prevLine.length; i++) {
            if ((prevLine[i - 1] !== prevLine[i])){
                newLine += `${counter}${prevLine[i - 1]}`
                counter = 1
            }
            else{
                counter++
            }
        }
        this.sequence.push(newLine)
    }
}

generator = new Gen()
for (let i = 0; i < 10; i++) {
    generator.addLine()
}

print(generator.sequence)
