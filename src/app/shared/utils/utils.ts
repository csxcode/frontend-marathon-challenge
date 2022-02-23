export class Utils {
  public static toggleClass(element: Element, cls: string) {
    if (element.classList.contains(cls)) {
        element.classList.remove(cls);
    } else {
        element.classList.add(cls);
    }
  }

  public static removeEmpty = (obj) => {
    Object.keys(obj || {}).forEach(
      (key) => (obj[key] == null || obj[key] === "") && delete obj[key]
    );
    return obj;
  };

  public static toFormData(object) {
    const formData = new FormData();
    Object.keys(object).forEach(key => formData.append(key, object[key]));
    return formData;
  }
}
