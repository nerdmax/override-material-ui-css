import * as emotion from "emotion";
import { createSerializer } from "jest-emotion";
// this is basically: afterEach(cleanup)
import "react-testing-library/cleanup-after-each";

expect.addSnapshotSerializer(createSerializer(emotion));
