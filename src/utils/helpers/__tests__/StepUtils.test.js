import { StepUtils } from "../StepUtils"
import { mockStep1, mockStep2, mockStep3 } from "../../mock"

describe("StepUtils Tests", () => {
    describe("getLatestVersionedContent Tests", () => {
        it("Given a step with multiple versions, returns the latest version", () => {
            const expectedLatestVersionTitle =
                mockStep1.versionedContent[1].title
            const actualLatestVersion = StepUtils.getLatestVersionedContent(
                mockStep1
            )

            const actualLatestVersionTitle = actualLatestVersion.title

            expect(actualLatestVersionTitle).toEqual(expectedLatestVersionTitle)
        })
    })

    describe("sortStepsByStepNumber Tests", () => {
        it("Given a list of steps, sorts them in ascending order by stepNumber", () => {
            const unsortedSteps = [mockStep3, mockStep1, mockStep2]

            const expectedOrderOfSteps = [mockStep1, mockStep2, mockStep3]
            const actualOrderOfSteps = StepUtils.sortStepsByStepNumber(
                unsortedSteps
            )

            expect(actualOrderOfSteps).toEqual(expectedOrderOfSteps)
        })
    })
})
