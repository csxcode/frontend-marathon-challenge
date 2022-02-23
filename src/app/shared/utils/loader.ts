export class Loader {
  private  activeProcess = 0;
  public show(): void {
      this.activeProcess ++;
  }
  public hide(): void {
      this.activeProcess --;
  }
  isBusy(): boolean {
      return  this.activeProcess !== 0;
  }
}
