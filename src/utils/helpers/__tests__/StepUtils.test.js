import { StepUtils } from "../StepUtils"
import { mockStep1 } from "../../mock"

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
})
