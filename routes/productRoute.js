
import {
  addProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

import { authenticate, authorize } from "../middleware/auth.js";

const productRouter = express.Router();
productRouter.get("/", getProducts);
productRouter.get("/:id", getSingleProduct);
productRouter.post("/", authenticate, authorize("admin"), addProduct);
productRouter.put("/:id", authenticate, authorize("admin"), updateProduct);
productRouter.delete("/:id", authenticate, authorize("admin"), deleteProduct);

export default productRouter;